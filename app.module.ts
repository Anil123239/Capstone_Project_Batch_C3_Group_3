import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductsComponent } from './component/products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './component/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SignupComponent } from './component/signup/signup.component';
import { UsersComponent } from './component/manage/users/users.component';
import { ManageProductsComponent } from './component/manage/products/products.component';
import { AdminComponent } from './component/admin/admin.component';
import { HomeComponent } from './component/home/home.component';
import { ProductCategoryComponent } from './component/product-category/product-category.component';
import { WishlistComponent } from './component/wishlist/wishlist.component';
import { FooterComponent } from './component/footer/footer.component';
import { EditProductComponent } from './component/manage/edit-product/edit-product.component';
import { EditUsersComponent } from './component/manage/edit-users/edit-users.component';
import { DiscountComponent } from './component/discount/discount.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SearchResultComponent } from './component/search-result/search-result.component';
import { AdminNewComponent } from './admin-new/admin-new.component';
import { MailComponent } from './mail/mail.component';
import { SocialLoginModule } from 'angularx-social-login';

import { GoogleLoginProvider, SocialAuthServiceConfig  } from 'angularx-social-login';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    ProductsComponent,
    LoginComponent,
    SignupComponent,
    UsersComponent,
    ManageProductsComponent,
    AdminComponent,
    HomeComponent,
    ProductCategoryComponent,
    WishlistComponent,
    FooterComponent,
    EditProductComponent,
    EditUsersComponent,
    DiscountComponent,
    CheckoutComponent,
    SearchResultComponent,
    AdminNewComponent,
    MailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    SocialLoginModule
  ],
  providers: [{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
           '444445005133-52om8kokffks4o5ocg21fiqh00n41bu3.apps.googleusercontent.com' // add web app client id
          )
        }
      ]
    } as SocialAuthServiceConfig
  }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
