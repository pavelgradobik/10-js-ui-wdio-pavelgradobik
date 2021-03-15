import { ProductCardComponent } from "./components/product-card.component";
import { TopLinks } from "./components/top-links.component"

export class ProductCategoryPage {
    topLinks: TopLinks = new TopLinks();

    open(url: string) {
        browser.url(url);
    }

    get products(): ProductCardComponent[] {
        return $$('div.product-layout').map(elem => {
            return new ProductCardComponent(elem)
        })
    }

    get productSuccessWishListAdd(){
        return $('[class*="alert-success"]');
    }

    succesMessageHasShown(): boolean{
        return this.productSuccessWishListAdd.isDisplayed();
    }

    get productComparePageLink(){
        return $('.form-group a[href*="product/compare"]');
    }

}