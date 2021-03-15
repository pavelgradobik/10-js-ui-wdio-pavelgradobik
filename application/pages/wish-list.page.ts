import { wishListComponents } from "./components/wish-list.component";

export class WishListPage{

    isOpen(): boolean{
        return $('#content h2').isDisplayed();
    }

    get wishProducts(): wishListComponents[]{
        return $$('#content [class="text-left"]').map(elem => {
            return new wishListComponents(elem);
        })
    }
}