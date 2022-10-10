import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandPageComponent } from './land-page/land-page.component';
import { FrontComponent } from './land-page/front/front.component';
import { BuyPageComponent } from './land-page/buy-page/buy-page.component';
import { CartComponent } from './land-page/cart/cart.component';
import { CategoriesComponent } from './land-page/categories/categories.component';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './land-page/user/user.component';
import { RegisterComponent } from './land-page/user/register/register.component';
import { ForgetPasswordComponent } from './land-page/user/forget-password/forget-password.component';
import {HttpClientModule } from '@angular/common/http';
import { DirectBuyComponent } from './land-page/direct-buy/direct-buy.component';
import { EmptyCompComponent } from './empty-comp/empty-comp.component';
import { OrdersComponent } from './land-page/orders/orders.component';

@NgModule({
  declarations: [
    AppComponent,
    LandPageComponent,
    FrontComponent,
    BuyPageComponent,
    CartComponent,
    CategoriesComponent,
    UserComponent,
    RegisterComponent,
    ForgetPasswordComponent,
    DirectBuyComponent,
    EmptyCompComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
