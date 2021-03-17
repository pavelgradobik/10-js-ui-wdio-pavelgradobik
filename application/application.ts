import { CompareProductsPage } from "./pages/compare-products.page";
import { TopMenuComponents } from "./pages/components/top-menu.component";
import { ContactUsPage } from "./pages/contact-us.page";
import { GiftVoucherConfirmationPage } from "./pages/gift-voucher-send-confirmation.page";
import { GiftVoucherPage } from "./pages/gift-voucher.page";
import { HomePage } from "./pages/main-page";
import { ProductCategoryPage } from "./pages/product-category.page";
import { RegisterAccountPage } from "./pages/register-account.page";
import { ReturnConfirmationPage } from "./pages/return-confirmation.page";
import { ReturnPage } from "./pages/return.page";
import { ReturnCustomerPage } from "./pages/returning-customer.page";
import { ShoppingCart } from "./pages/shopping-cart.page";
import { WishListPage } from "./pages/wish-list.page";

export class App {
    returnPage: ReturnPage;
    returnConfirmation: ReturnConfirmationPage;
    giftVoucherPage: GiftVoucherPage;
    giftVoucherConfirmation: GiftVoucherConfirmationPage;
    contactUS: ContactUsPage;
    homePage: HomePage;
    loginPage: ReturnCustomerPage;
    customerRegistrationPage: RegisterAccountPage;
    productCategoryPage: ProductCategoryPage;
    compareProductsPage: CompareProductsPage;
    wishListPage: WishListPage;
    productMenu: TopMenuComponents;
    shoppingCart: ShoppingCart;

    

    constructor(){
        this.returnPage = new ReturnPage();
        this.returnConfirmation = new ReturnConfirmationPage();
        this.giftVoucherPage = new GiftVoucherPage();
        this.giftVoucherConfirmation = new GiftVoucherConfirmationPage();
        this.contactUS = new ContactUsPage();
        this.homePage = new HomePage();
        this.loginPage = new ReturnCustomerPage();
        this.customerRegistrationPage = new RegisterAccountPage();
        this.productCategoryPage = new ProductCategoryPage();
        this.compareProductsPage = new CompareProductsPage();
        this.wishListPage = new WishListPage();
        this.productMenu = new TopMenuComponents();
        this.shoppingCart = new ShoppingCart();
    }
}