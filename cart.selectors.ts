import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CartState } from '../reducers/cart.reducer';
import { CartItem } from '../../shared/models/cart-item.model';

export const selectCartState = createFeatureSelector<CartState>('cart');

export const selectCartItems = createSelector(
  selectCartState,
  (state: CartState) => state.items
);

export const selectTotalPrice = createSelector(
  selectCartItems,
  (items: CartItem[]) => items.reduce((total, item) => total + item.price * item.quantity, 0)
);

export const selectItemCount = createSelector(
  selectCartItems,
  (items: CartItem[]) => items.reduce((count, item) => count + item.quantity, 0)
);