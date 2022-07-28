const { test, expect, isDisabled} = require('@playwright/test');

class SearchResultsCalculator {

    constructor(page) {
      this.page = page;
    }

    async getOperationResults(First_number, Second_Number, Operation) {
      await this.page.locator('#number1Field').type(First_number);
      await this.page.locator('#number2Field').type(Second_Number);
      await this.page.selectOption('#selectOperationDropdown', {label: Operation});
      await this.page.locator('#calculateButton').click();
      return await this.page.locator('#numberAnswerField');
    }
    
    async getButtonState(ID) {
        return this.page.locator(ID).isDisabled();
    }
}

module.exports = { SearchResultsCalculator };