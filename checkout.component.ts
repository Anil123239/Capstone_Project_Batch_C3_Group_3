import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor() { }
  handler:any = null;
  ngOnInit() {
 
    this.loadStripe();
  }
 
  pay() {    
 
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51LSKmXSFQXGBKYtV5sqgsbZcqWJ2ApAGFZAlVLw4xbWl0z6p0udKxrnDbgFwkunJbwv9Y9uaX4IZZAha6CIBfLZg003Zrwvbfg',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        console.log(token)
        alert('Token Created!!');
      }
    });
 
    handler.open({
      name: 'Paytm',
      description: 'Secure Transaction',
      
    });
 
  }
 
  loadStripe() {
     
    if(!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      s.onload = () => {
        this.handler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51LSKmXSFQXGBKYtV5sqgsbZcqWJ2ApAGFZAlVLw4xbWl0z6p0udKxrnDbgFwkunJbwv9Y9uaX4IZZAha6CIBfLZg003Zrwvbfg',
          locale: 'auto',
          token: function (token: any) {
            // You can access the token ID with `token.id`.
            // Get the token ID to your server-side code for use.
            console.log(token)
            alert('Payment Success!!');
          }
        });
      }
       
      window.document.body.appendChild(s);
    }
  }

}
