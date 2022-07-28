class SearchResultsPage {

    constructor(page) {
      this.page = page;
    }  

    getResults(){
        return this.page.locator('article[data-testid=result]');
    }

    async getMainLinkAttributeFromResult(resultIndex) {
        return await this.page.locator(`#r1-${resultIndex - 1} h2 a`).getAttribute('href');

    }

    async getQueryInputText() {
        return await this.page.locator('input[name=q]').getAttribute('value');
    }
}

module.exports = { SearchResultsPage };


/*
const {expect } = require('@playwright/test');

class SearchResultsPage {

    constructor(page) {
      this.page = page;
    }

    async locate(selector) {
        await page.locator(selector).getAttribute('href');
    }

    async expectation(url) {
        expect(text).toContain(url);
    }
}
/*
    async check(text1, text2) {
        let text = await this.page.locator(text1).getAttribute('href);
        await expect(text).
    }

/*

        let text = await page.locator('#r1-0 h2 a').getAttribute('href');

        expect(text).toContain('devbridge.com');
*/
