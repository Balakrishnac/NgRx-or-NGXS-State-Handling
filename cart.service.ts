import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AddItem, RemoveItem, UpdateItem } from '../actions/cart.actions';
import { CartItem } from '../../shared/models/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private store: Store) {}

  addItem(item: CartItem) {
    this.store.dispatch(new AddItem(item));
  }

  removeItem(itemId: string) {
    this.store.dispatch(new RemoveItem(itemId));
  }

  updateItem(item: CartItem) {
    this.store.dispatch(new UpdateItem(item));
  }
}