import { ReturnConfirmationPage } from "./pages/return-confirmation.page";
import { ReturnPage } from "./pages/return.page";

export class App {
    returnPage: ReturnPage;
    returnConfirmation: ReturnConfirmationPage;

    constructor(){
        this.returnPage = new ReturnPage();
        this.returnConfirmation = new ReturnConfirmationPage();
    }
}