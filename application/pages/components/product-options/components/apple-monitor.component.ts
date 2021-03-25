type ValueNumber = '5' | '6' | '7';
type CheckboxValueNumber = '8' | '9' | '10' | '11';

export class MonitorComponent {
  private get root(): WebdriverIO.Element {
    return $('#content .col-sm-4');
  }

  get monitorName() {
    return this.root.$('h1');
  }

  get monitorPrice() {
    return this.root.$('h2');
  }

  isOpen(): boolean {
    return this.root.$('h1').isDisplayed();
  }

  selectSizeRadioButton(sizeOption: ValueNumber) {
    const sizeRadiobutton = this.root
      .$(`[type=radio][value="${sizeOption}"]`)
      .parentElement();
    sizeRadiobutton.isDisplayed();
    sizeRadiobutton.click();
  }

  selectCheckBoxOption(checkboxoption: CheckboxValueNumber) {
    const sizeCheckbox = this.root
      .$(`[type=checkbox][value="${checkboxoption}"]`)
      .parentElement();
    sizeCheckbox.isDisplayed();
    sizeCheckbox.click();
  }

  fillTextInputField(textToInput: string | number) {
    const inputText = this.root.$('[value="test"]');
    inputText.isDisplayed();
    inputText.setValue(textToInput);
  }

  selectColorType(colorOption) {
    const selectColorOption = this.root.$('select');
    browser.waitUntil(
      () => {
        try {
          selectColorOption.selectByVisibleText(colorOption);
          return true;
        } catch {
          return false;
        }
      },
      {
        timeout: 2000,
        timeoutMsg: 'Expect the color option is visible and able to select',
      }
    );
  }

  fillTheTextArea(messageToInput: string | number) {
    const textarea = this.root.$('[placeholder="Textarea"]');
    textarea.isDisplayed();
    textarea.setValue(messageToInput);
  }

  get uploadButton(){
      return this.root.$('button#button-upload222');
  }

  setDate(){
    let todayDate: Date = new Date();
    let nextWeek: Date = new Date(todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate() +7);
    const dateInput = this.root.$('[class="input-group date"] input');
    dateInput.setValue(nextWeek.toLocaleDateString('fr-ca', { year: 'numeric', month: '2-digit', day: '2-digit' }));
  }

  setTime(){
      
  }

}
