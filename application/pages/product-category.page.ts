import { ProductCardComponent } from "./components/product-card.component";
import { TopLinks } from "./components/top-links/components/top-links.component"

export class ProductCategoryPage {
    topLinks: TopLinks = new TopLinks();

    open(url: string) {
        browser.url(url);
    }

    isOpen(): boolean{
        return $('#product-category h2').isDisplayed();
    }

    
    succesMessageHasShown(): boolean{
        return this.productSuccessWishListAdd.isDisplayed();
    }
    
    goToWishlist(){
        const wishListLink = $("#wishlist-total");
        wishListLink.isDisplayed();
        wishListLink.click();
    }
    
    get products(): ProductCardComponent[] {
        return $$('div.product-layout').map(elem => {
            return new ProductCardComponent(elem)
        })
    }
    
    get productSuccessWishListAdd(){
        return $('[class*="alert-success"]');
    }
    
    get productComparePageLink(){
        return $('.form-group a[href*="product/compare"]');
    }

    openShoppingCartAndGetProduct(productName)
    {
        const cartDropDown = $("#cart");
        cartDropDown.isDisplayed()
        cartDropDown.click()
        const productImageAtCartDropDown = $(`img[title="${productName}"]`);
        return productImageAtCartDropDown;
        
    }
    
    


}