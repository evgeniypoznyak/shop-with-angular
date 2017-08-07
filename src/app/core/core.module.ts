import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';

import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { RecipeService } from '../recipes/recipe.service';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/signin/auth.service';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

// Exports HeaderComponent allowed to call <app-header></app-header> in app.component
@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent
  ],
  providers: [
    ShoppingListService,
    RecipeService,
    DataStorageService,
    AuthService]
})
export class CoreModule {
}
