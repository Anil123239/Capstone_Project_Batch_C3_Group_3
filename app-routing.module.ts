import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import {ProductsComponent} from './component/products/products.component';
import {ManageProductsComponent} from './component/manage/products/products.component';
import {LoginComponent} from './component/login/login.component'
import { SignupComponent } from './component/signup/signup.component';
import { UsersComponent } from './component/manage/users/users.component';
import { AdminComponent } from './component/admin/admin.component';
import { HomeComponent } from './component/home/home.component';
import { ProductCategoryComponent } from './component/product-category/product-category.component';
import { WishlistComponent } from './component/wishlist/wishlist.component';
import { EditProductComponent } from './component/manage/edit-product/edit-product.component';
import { EditUsersComponent } from './component/manage/edit-users/edit-users.component';
import { DiscountComponent } from './component/discount/discount.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SearchResultComponent } from './component/search-result/search-result.component';
import { AdminNewComponent } from './admin-new/admin-new.component';
import { MailComponent } from './mail/mail.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'admin/manage/users', component: UsersComponent },
  { path: 'admin/manage/products', component: ManageProductsComponent },
  // {path:'', redirectTo: 'products',pathMatch: 'full'},
  {path:'products', component: ProductsComponent},                                                              
  {path:'product/category', component: ProductCategoryComponent},
  {path:'cart' , component: CartComponent},
  {path:'wishlist' , component: WishlistComponent},
  {path:'discount' , component: DiscountComponent},
  {path:'edit/product/:id' , component: EditProductComponent},
  {path:'edit/user/:id' , component: EditUsersComponent},
  {path:'checkout' , component: CheckoutComponent},
  {path:'search-result' , component: SearchResultComponent},
  {path:'admin-new' , component: AdminNewComponent},
  {path:'compose-mail' , component: MailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
