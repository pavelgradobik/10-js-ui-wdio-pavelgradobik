export class RegisterAccountComponents {
  get firstNameInput() {
    return $("#input-firstname");
  }
  get lastNameInput() {
    return $("#input-lastname");
  }
  get emailInput() {
    return $("#input-email");
  }
  get telephoneInput() {
    return $("#input-telephone");
  }
  get passwordInput() {
    return $("#input-password");
  }
  get confirmPasswordInput() {
    return $("#input-confirm");
  }
  get privacyPolicyCheckbox() {
    return $('[name="agree"]');
  }
  get continueButton() {
    return $('[value="Continue"]');
  }
}
