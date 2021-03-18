export class OrderConfirmation{

    isOpened(): boolean {
        return $('h1=Your order has been placed!').isDisplayed();
    }
}