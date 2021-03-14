import { GiftVoucherConfirmationPage } from "./pages/gift-voucher-send-confirmation";
import { GiftVoucherPage } from "./pages/gift-voucher.page";
import { ReturnConfirmationPage } from "./pages/return-confirmation.page";
import { ReturnPage } from "./pages/return.page";

export class App {
    returnPage: ReturnPage;
    returnConfirmation: ReturnConfirmationPage;
    giftVoucherPage: GiftVoucherPage;
    giftVoucherConfirmation: GiftVoucherConfirmationPage;

    constructor(){
        this.returnPage = new ReturnPage();
        this.returnConfirmation = new ReturnConfirmationPage();
        this.giftVoucherPage = new GiftVoucherPage();
        this.giftVoucherConfirmation = new GiftVoucherConfirmationPage();
    }
}