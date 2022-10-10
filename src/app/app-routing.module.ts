import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyCompComponent } from './empty-comp/empty-comp.component';
import { BuyPageComponent } from './land-page/buy-page/buy-page.component';
import { CartComponent } from './land-page/cart/cart.component';
import { CategoriesComponent } from './land-page/categories/categories.component';
import { DirectBuyComponent } from './land-page/direct-buy/direct-buy.component';
import { FrontComponent } from './land-page/front/front.component';
import { LandPageComponent } from './land-page/land-page.component';
import { OrdersComponent } from './land-page/orders/orders.component';
import { ForgetPasswordComponent } from './land-page/user/forget-password/forget-password.component';
import { RegisterComponent } from './land-page/user/register/register.component';
import { UserComponent } from './land-page/user/user.component';

const routes: Routes = [
  {path:"",component:FrontComponent},
  {path:"show/:id", component:BuyPageComponent},
  {path:"cart",component:CartComponent},
  {path:"category/:accessories",component:CategoriesComponent},
  {path:"category/:electronics",component:CategoriesComponent},
  {path:'login',component:UserComponent},
  {path:'register',component:RegisterComponent},
  {path:'forgetpassword',component:ForgetPasswordComponent},
  {path:'directbuy',component:DirectBuyComponent},
  {path:'empty',component:EmptyCompComponent},
  {path:'orders',component:OrdersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
