import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { AuthModule } from './auth/auth.module';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // BrowserModule consist of CommonModule (no need to declare) and some features then app loads
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    ShoppingListModule,
    SharedModule,
    AuthModule,
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
