import { CheckoutOptionsComponent } from "./components/01-checkout-options.component";
import { BillingDetailsComponentP } from "./components/02-biling-details.component";
import { DeliveryDetails } from "./components/03-delivery-details.component";
import { DeliveryMethodComponent } from "./components/04-delivery-method.component";
import { PaymentMethodComponent } from "./components/05-payment-method.component";
import { ConfirmOrderComponent } from "./components/06-confirm-order.component";
import { AccountAndBillingDetailsComponent } from "./components/07-account-and-billing-details.component";
import { OrderConfirmation } from "./components/08-confirmation-order.component";


export class CheckoutPage {

    get checkoutOptions() {
        return new CheckoutOptionsComponent();
    }

    get billingDetails() {
        return new BillingDetailsComponentP();
    }

    
    get deliveryDetails() {
        return new DeliveryDetails();
    }
    
    get deliveryMethod() {
        return new DeliveryMethodComponent();
    }
    
    get paymentMethod() {
        return new PaymentMethodComponent();
    }
    
    get confirmOrder() {
        return new ConfirmOrderComponent();
    }
    
    get accountAndBillingDetails() {
        return new AccountAndBillingDetailsComponent();
    }

    get orderConfirmation(){
        return new OrderConfirmation();
    }
    
    open(url: string) {
        browser.url('/index.php?route=checkout/checkout');
    }
    
}