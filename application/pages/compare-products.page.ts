
export class CompareProductsPage{

    isOpen(): boolean{
        return $('#product-compare h1').isDisplayed();
    }

    productTitle(): string{
        return $('#product-compare a strong').getText();
    }

    addtoCartFromCompare(){
        const addToCartButton = $('[value="Add to Cart"]');
        addToCartButton.isDisplayed();
        addToCartButton.click();
    }

    removeFromCompare(){
        const removeButton = $('a[href*="remove"]');
        removeButton.isDisplayed();
        removeButton.click();
    }
    
}