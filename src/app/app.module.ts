import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {CoreModule} from './core.module';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {AppRoutingModule} from './app-routing.module';
import {SharedModule} from './shared/shared.module';
import * as fromApp from './store/app.reducer';
import {AuthEffects} from './auth/store/auth.effect';
import {RecipesEffects} from './recipes/store/recipe.effects';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(fromApp.appReducer),
    EffectsModule.forRoot([AuthEffects, RecipesEffects]),
    CoreModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
