class SearchCalculator {

    constructor(page) {
      this.page = page;
    }

    async navigate() {
        await this.page.goto('https://testsheepnz.github.io/BasicCalculator');
    }

    async selectVersion(version) {
        await this.page.selectOption('#selectBuild', { label: version});
    }
}

module.exports = { SearchCalculator };