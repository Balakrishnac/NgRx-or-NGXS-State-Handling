import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { cartReducer } from './reducers/cart.reducer';
import { CartEffects } from './effects/cart.effects';
import { CartItemComponent } from './components/cart-item.component';
import { CartService } from './services/cart.service';

@NgModule({
  declarations: [
    CartItemComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('cart', cartReducer),
    EffectsModule.forFeature([CartEffects])
  ],
  providers: [CartService],
  exports: [CartItemComponent]
})
export class CartModule { }