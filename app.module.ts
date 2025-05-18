import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppComponent } from './app.component';
import { CartModule } from '../cart/cart.module';
import { cartReducer } from '../cart/reducers/cart.reducer';
import { CartEffects } from '../cart/effects/cart.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CartModule,
    StoreModule.forRoot({ cart: cartReducer }),
    EffectsModule.forRoot([CartEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }