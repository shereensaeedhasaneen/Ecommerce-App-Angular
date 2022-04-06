import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LottieModule } from 'ngx-lottie'; // add this line
import player from 'lottie-web';
import { CartComponent } from './components/header/widgets/cart/cart.component';
import { NavbarComponent } from './components/header/navbar/navbar.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { DashboardComponent } from './admin/component/dashboard/dashboard.component';
import { ManageCategoriesComponent } from './admin/component/manage-categories/manage-categories.component';
import { ManageOrdersComponent } from './admin/component/manage-orders/manage-orders.component';
import { ManageUsersComponent } from './admin/component/manage-users/manage-users.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryDetailsComponent } from './components/category-details/category-details.component';
import { ContactComponent } from './components/contact/contact.component';
import { OrderComponent } from './components/order/order.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductFilterPipe } from './pipes/product-filter.pipe';
import { AlertComponent } from './shared/alert/alert.component';
import { ApplicationErrorComponent } from './shared/application-error/application-error.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { ResourceNotFoundComponent } from './shared/resource-not-found/resource-not-found.component';

export function playerFactory() {
  return player;
}
@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    NavbarComponent,
    ProductPageComponent,
    DashboardComponent,
    ManageCategoriesComponent,
    ManageOrdersComponent,
    ManageUsersComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    CategoryListComponent,
    CategoryDetailsComponent,
    ContactComponent,
    OrderComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ProductFilterPipe,
    AlertComponent,
    ApplicationErrorComponent,
    PageNotFoundComponent,
    ResourceNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LottieModule.forRoot({ player: playerFactory})
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
