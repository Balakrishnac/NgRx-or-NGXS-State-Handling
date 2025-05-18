import { Component, Input } from '@angular/core';
import { CartItem } from 'src/shared/models/cart-item.model';
import { Store } from '@ngrx/store';
import { RemoveItem, UpdateItem } from '../actions/cart.actions';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
})
export class CartItemComponent {
  @Input() item!: CartItem;

  constructor(private store: Store) {}

  removeItem() {
    this.store.dispatch(RemoveItem({ id: this.item.id }));
  }

  updateItem(quantity: number) {
    this.store.dispatch(UpdateItem({ id: this.item.id, quantity }));
  }
}