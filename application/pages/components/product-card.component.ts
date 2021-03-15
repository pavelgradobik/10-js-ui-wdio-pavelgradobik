
export class ProductCardComponent {
    constructor(private root: WebdriverIO.Element) {

    }

    title(): string {
        return this.root.$('h4').getText();
    }

    addToCart() {
        const addToCartButton = this.root.$('button[onclick*="cart.add"] i.fa-shopping-cart')
        expect(addToCartButton).toBeVisible({ message: 'Expected add to cart button to be visible' })
        addToCartButton.click()
        
    }

    addToWishList() {
        const addToWishListButton = this.root.$('button[onclick*="wishlist.add"] i.fa-heart');
        expect(addToWishListButton).toBeVisible({message: 'Expect Add to Wishlist button is visible'});
        addToWishListButton.click();
    }

    compareThisProduct() {
        const addToCompareButton = this.root.$('button[onclick*="compare.add"] i.fa-exchange');
        expect(addToCompareButton).toBeVisible({message: 'Expect add To compare is visible'});
        addToCompareButton.cliuck();
    }
}