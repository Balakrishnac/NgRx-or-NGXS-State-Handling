import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCartItems, selectTotalPrice, selectItemCount } from './cart/selectors/cart.selectors';
import { CartItem } from './shared/models/cart-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cartItems$: Observable<CartItem[]>;
  totalPrice$: Observable<number>;
  itemCount$: Observable<number>;

  constructor(private store: Store) {
    this.cartItems$ = this.store.select(selectCartItems);
    this.totalPrice$ = this.store.select(selectTotalPrice);
    this.itemCount$ = this.store.select(selectItemCount);
  }
}