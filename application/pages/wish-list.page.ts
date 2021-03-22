// import { wishListComponents } from "./components/wish-list/components/wish-list.component";

export class WishListPage{

    isOpen(): boolean{
        return $('#content h2').isDisplayed();
    }

    private get root(): WebdriverIO.Element {
        return $('#content [class="text-left"]')
    }

    productAtWishListIsVisible(prodName){
        let productInWishListTable = $(`img[title="${prodName}"]`);
        return productInWishListTable;
    }

    productTitle(): string{
        return this.root.$('#content [class="text-left"] a').getText();
    }

    addtoCartFromWishlist(){
        const addToCartButton = $('#content button .fa-shopping-cart');
        addToCartButton.isDisplayed();
        addToCartButton.click();
    }

    removeFromWishList(){
        const removeButton = $('#content a .fa-times');
        removeButton.isDisplayed();
        removeButton.click();
    }
}