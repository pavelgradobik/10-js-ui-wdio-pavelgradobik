// Use http://93.126.97.71:10082/mp3-players to simplify these tests. Mp3 players does not have custom params on details page.

// bonus points:
// - use preconditions
// - use dataprovider
describe("Items", function () {
  // You must be logged in to use wishlist

  const emailAdress = `${Math.random().toString(36).substring(3)}@mail.mail`;
  const password = Math.random().toString(36).substring(3);
  
  
  function logIn(mail: string, password: string) {
    
    const emailInput = $("#input-email");
    const passwordInput = $("#input-password");
    const loginButton = $('[value="Login"]');

    emailInput.setValue(mail);
    passwordInput.setValue(password);
    loginButton.click();
  }

  const productsToWishList: string[] = ['iPod Classic','iPod Nano', 'iPod Shuffle', 'iPod Touch'];

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

  beforeEach(function () {
    browser.reloadSession();
  });

  afterEach(function () {
    browser.deleteAllCookies();
  });

  productsToWishList.map((product) => {

      it("can be added to wishlist", function () {
        browser.url("/index.php?route=account/login");
        logIn(emailAdress, password);
        browser.url("/mp3-players");
    
        $(`a=${product}`).click();
        browser.pause(2000);
      });

  });

  it.skip("can be selected for comparison by registered user", function () {});

  it.skip("can be selected for comparison by guest", function () {});

  it.skip("can be added to cart by guest", function () {});

  it.skip("can be added to cart by registered user", function () {});
});
