import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { LocalStorageService } from '../../shared/services/local-storage.service';
import { CartActionTypes, AddItem, RemoveItem, UpdateItem } from '../actions/cart.actions';
import { tap } from 'rxjs/operators';

@Injectable()
export class CartEffects {
  constructor(
    private actions$: Actions,
    private localStorageService: LocalStorageService,
    private store: Store
  ) {}

  persistCart$ = createEffect(() => 
    this.actions$.pipe(
      ofType<AddItem | RemoveItem | UpdateItem>(
        CartActionTypes.AddItem,
        CartActionTypes.RemoveItem,
        CartActionTypes.UpdateItem
      ),
      tap(() => {
        // Logic to persist the cart state to localStorage
        this.store.select('cart').subscribe(cartState => {
          this.localStorageService.saveCart(cartState);
        });
      })
    ),
    { dispatch: false }
  );
}