import { createReducer, on } from '@ngrx/store';
import { CartItem } from '../../shared/models/cart-item.model';
import { addItem, removeItem, updateItem } from '../actions/cart.actions';

export interface CartState {
  items: CartItem[];
}

export const initialState: CartState = {
  items: [],
};

export const cartReducer = createReducer(
  initialState,
  on(addItem, (state, { item }) => ({
    ...state,
    items: [...state.items, item],
  })),
  on(removeItem, (state, { id }) => ({
    ...state,
    items: state.items.filter(item => item.id !== id),
  })),
  on(updateItem, (state, { item }) => ({
    ...state,
    items: state.items.map(existingItem =>
      existingItem.id === item.id ? { ...existingItem, ...item } : existingItem
    ),
  }))
);