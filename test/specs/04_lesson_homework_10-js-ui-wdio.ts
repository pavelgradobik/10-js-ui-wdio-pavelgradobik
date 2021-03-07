// Use http://93.126.97.71:10082/mp3-players to simplify these tests. Mp3 players does not have custom params on details page.

// bonus points:
// - use preconditions
// - use dataprovider
describe("Items", function () {
  // You must be logged in to use wishlist

  const emailAdress = `${Math.random().toString(36).substring(3)}@mail.mail`;
  const password = Math.random().toString(36).substring(3);
  
  type ProdList = {
    name: string;
    link: string;
  }
  
  function logIn(mail: string, password: string) {
    
    const emailInput = $("#input-email");
    const passwordInput = $("#input-password");
    const loginButton = $('[value="Login"]');

    emailInput.setValue(mail);
    passwordInput.setValue(password);
    loginButton.click();
  }

  const productsToWishList: Array<ProdList> = [{name: 'iPod Classic', link: 'ipod-classic'}, {name: 'iPod Nano', link: 'ipod-nano'}, {name: 'iPod Shuffle', link: 'ipod-shuffle'},{name: 'iPod Touch', link: 'ipod-touch'}];

  before(function () {
    //#region register/login page locators
    const firstNameInput = $("#input-firstname");
    const lastNameInput = $("#input-lastname");
    const emailInput = $("#input-email");
    const telephoneInput = $("#input-telephone");
    const passwordInput = $("#input-password");
    const confirmPasswordInput = $("#input-confirm");
    const privacyPolicyCheckbox = $('[name="agree"]');
    const continueButton = $('[value="Continue"]');
    //#endregion

    //#region registration
    browser.url("/index.php?route=account/register");
    browser.acceptAlert(); // there is a browser alert pop-up, so this needed.
    firstNameInput.setValue(Math.random().toString(36).substring(3));
    lastNameInput.setValue(Math.random().toString(36).substring(3));
    emailInput.setValue(emailAdress);
    telephoneInput.setValue(`+${Math.random().toString().slice(2, 11)}`);
    passwordInput.setValue(password);
    confirmPasswordInput.setValue(password);
    privacyPolicyCheckbox.click();
    continueButton.click();
    //#endregion
  });

  beforeEach(function() {
    browser.deleteAllCookies();
  });

  productsToWishList.map((product) => {

      it("can be added to wishlist", function () {

        // let addWishListSuccessMessage = `Success: You have added ${product.name} to your wish list!`;
        const emptywishlistMessage = 'Your wish list is empty.';
        

        //#region locators
        const addToWishListButton = $('[data-original-title="Add to Wish List"]');
        const wishListLink = $('#wishlist-total');
        let selectProduct = $(`h4>a[href*=${product.link}]`);
        let productInWishListTable = $(`img[title="${product.name}"]`);
        let wishListMessageLink = $(`a[href*=${product.link}]`);
        const removeButton = $('[data-original-title="Remove"]');
        const emptyWishlist = $('#content p');
        //#endregion

        //#region test
        browser.url("/index.php?route=account/login");
        logIn(emailAdress, password);
              
        browser.url("/mp3-players");
        browser.pause(500);
        
        selectProduct.click();
        browser.pause(500);
        addToWishListButton.click();
        
        expect(wishListMessageLink).toBeDisplayed();
        
        wishListLink.click();
        browser.pause(200);
        expect(productInWishListTable).toBeDisplayed();
        expect(emptyWishlist).not.toBeDisplayed();
        
        removeButton.click();
        //#endregion
   
      });

  });

  it.skip("can be selected for comparison by registered user", function () {});

  it.skip("can be selected for comparison by guest", function () {});

  it.skip("can be added to cart by guest", function () {});

  it.skip("can be added to cart by registered user", function () {});
});
