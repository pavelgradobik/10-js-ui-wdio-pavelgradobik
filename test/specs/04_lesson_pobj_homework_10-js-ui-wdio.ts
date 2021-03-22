import { App } from '../../application/application';
import { cleanUpCart } from '../../utils/clear-shopping-cart.helper';
// import { userRegistration } from '../../application/utils/user-registration.helper';
import { productsToWishList } from '../../testData/wish-list/products-wishlist';

describe('Items', function () {
  const emailAdress = 'lastname@mail.mail';
  const password = 'lastname';

  // before(function () {
  //   userRegistration(emailAdress, password);
  // });

  afterEach(function () {
    browser.deleteCookies();
  });

  productsToWishList.map((product) => {
    it(`${product.name} can be added to wishlist`, function () {
      const app = new App();
      app.loginPage.openLoginPage('/index.php?route=account/login');
      browser.waitUntil(() => app.loginPage.isOpen(), {
        timeoutMsg: 'Expected Login page is opened',
      });
      app.loginPage.fillLoginFormAndLogin({
        emailAdress: emailAdress,
        password: password,
      });

      app.productMenu.mp3PlayersMenuButton.click();
      app.productMenu.openAllMp3PlayersList.click();

      browser.waitUntil(() => app.productCategoryPage.isOpen(), {
        timeoutMsg: 'Expected Products page is opened',
      });

      const mp3player = app.productCategoryPage.products.find(
        (player) => player.title() === product.name
      );
      mp3player.addToWishList();

      browser.waitUntil(() => app.productCategoryPage.succesMessageHasShown(), {
        timeoutMsg: 'Expected Login page is opened',
      });

      app.productCategoryPage.goToWishlist();

      browser.waitUntil(() => app.wishListPage.isOpen(), {
        timeoutMsg: 'Expected wishlist page is opened',
      });

      expect(
        app.wishListPage.productAtWishListIsVisible(product.name)
      ).toBeExisting();

      app.wishListPage.removeFromWishList();
    });
  });

  productsToWishList.map((product) => {
    it(`${product.name} can be selected for comparison by registered user`, function () {
      const app = new App();

      app.loginPage.openLoginPage('/index.php?route=account/login');
      browser.waitUntil(() => app.loginPage.isOpen(), {
        timeoutMsg: 'Expected Login page is opened',
      });
      app.loginPage.fillLoginFormAndLogin({
        emailAdress: emailAdress,
        password: password,
      });

      app.productMenu.mp3PlayersMenuButton.click();
      app.productMenu.openAllMp3PlayersList.click();

      browser.waitUntil(() => app.productCategoryPage.isOpen(), {
        timeoutMsg: 'Expected Products page is opened',
      });

      const mp3player = app.productCategoryPage.products.find(
        (player) => player.title() === product.name
      );

      mp3player.compareThisProduct();

      app.productCategoryPage.productComparePageLink.click();

      browser.waitUntil(() => app.compareProductsPage.isOpen(), {
        timeoutMsg: 'Expected wishlist page is opened',
      });

      expect(app.compareProductsPage.productTitle()).toEqual(product.name);

      app.compareProductsPage.removeFromCompare();
    });
  });

  productsToWishList.map((product) => {
    it(`${product.name} can be selected for comparison by guest`, function () {
      const app = new App();

      app.homePage.open('b/index.php?route=common/home');

      app.productMenu.mp3PlayersMenuButton.click();
      app.productMenu.openAllMp3PlayersList.click();

      browser.waitUntil(() => app.productCategoryPage.isOpen(), {
        timeoutMsg: 'Expected Products page is opened',
      });

      const mp3player = app.productCategoryPage.products.find(
        (player) => player.title() === product.name
      );

      mp3player.compareThisProduct();

      app.productCategoryPage.productComparePageLink.click();

      browser.waitUntil(() => app.compareProductsPage.isOpen(), {
        timeoutMsg: 'Expected wishlist page is opened',
      });

      expect(app.compareProductsPage.productTitle()).toEqual(product.name);

      app.compareProductsPage.removeFromCompare();
    });
  });

  productsToWishList.map((product) => {
    it(`${product.name} can be added to cart by guest`, function () {
      const app = new App();

      app.homePage.open('b/index.php?route=common/home');

      app.productMenu.mp3PlayersMenuButton.click();
      app.productMenu.openAllMp3PlayersList.click();

      app.productCategoryPage.topLinks.openMyAcountOptions();
      expect(app.productCategoryPage.topLinks.loginButton).toBeDisplayed();

      const productToSelect = app.productCategoryPage.products.find(
        (prod) => prod.title() === product.name
      );
      productToSelect.addToCart();

      expect(
        app.productCategoryPage.openShoppingCartAndGetProduct(product.name)
      ).toBeDisplayed();

      app.productCategoryPage.topLinks.shoppingCartLink.click();

      browser.waitUntil(() => app.shoppingCart.isOpen(), {
        timeoutMsg: 'Expected ShoppingCart page is opened',
      });

      expect(app.shoppingCart.shoppingCartTitle).toBeDisplayed();
      expect(app.shoppingCart.shoppingCartTitle).toHaveTextContaining(
        'Shopping Cart'
      );
      
      expect(app.shoppingCart.shoppingCartTitle).toBeDisplayed();
      expect(app.shoppingCart.shoppingCartTitle).toHaveTextContaining(
        'Shopping Cart'
      );

      // expect($(`img[title="${product.name}"]`)).toBeVisible();
      expect(app.shoppingCart.productQuantity).toEqual(1);

      cleanUpCart();

    });
  });

  productsToWishList.map((product) => {
    it('can be added to cart by registered user', function () {
      const app = new App();

      app.homePage.open('b/index.php?route=common/home');

      app.loginPage.openLoginPage('/index.php?route=account/login');
      browser.waitUntil(() => app.loginPage.isOpen(), {
        timeoutMsg: 'Expected Login page is opened',
      });
      app.loginPage.fillLoginFormAndLogin({
        emailAdress: emailAdress,
        password: password,
      });

      app.productMenu.mp3PlayersMenuButton.click();
      app.productMenu.openAllMp3PlayersList.click();

      browser.waitUntil(() => app.productCategoryPage.isOpen(), {
        timeoutMsg: 'Expected Products page is opened',
      });

      const mp3player = app.productCategoryPage.products.find(
        (player) => player.title() === product.name
      );

      const productToSelect = app.productCategoryPage.products.find(
        (prod) => prod.title() === product.name
      );
      productToSelect.addToCart();

      expect(
        app.productCategoryPage.openShoppingCartAndGetProduct(product.name)
      ).toBeDisplayed();

      app.productCategoryPage.topLinks.shoppingCartLink.click();

      browser.waitUntil(() => app.shoppingCart.isOpen(), {
        timeoutMsg: 'Expected ShoppingCart page is opened',
      });

      expect(app.shoppingCart.shoppingCartTitle).toBeDisplayed();
      expect(app.shoppingCart.shoppingCartTitle).toHaveTextContaining(
        'Shopping Cart'
      );

      expect(app.shoppingCart.productQuantity).toEqual(1);

      // expect($(`img[title="${product.name}"]`)).toBeVisible();

      cleanUpCart();
    
    });
  });
});
