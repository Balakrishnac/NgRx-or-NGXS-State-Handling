import { createAction, props } from '@ngrx/store';
import { CartItem } from '../../shared/models/cart-item.model';

export const addItem = createAction(
  '[Cart] Add Item',
  props<{ item: CartItem }>()
);

export const removeItem = createAction(
  '[Cart] Remove Item',
  props<{ itemId: string }>()
);

export const updateItem = createAction(
  '[Cart] Update Item',
  props<{ item: CartItem }>()
);