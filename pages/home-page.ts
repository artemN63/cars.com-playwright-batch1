import { Page, Locator, expect } from "@playwright/test"

export class HomePage {

    mainTitle: Locator
    filterTitle: Locator

    searchBar: Locator

    expectedUrl: string = 'https://www.cars.com/'
    expectedMainTitle: string = 'Imagine the possibilities'
    expectedFilterTitle: string = '- Or search by -'

    constructor(page: Page) {
        this.mainTitle = page.locator('h1[class="hero-title "] span')
        this.filterTitle = page.locator('spark-stack[class="search-bar-horizontal-or"] strong')
        this.searchBar = page.locator('input[name="one_hitter"]')
    }

    async mainTitleValidation(): Promise<void> {
        await expect(this.mainTitle).toHaveText(this.expectedMainTitle)
    }

    async filterTitleValidation(): Promise<void> {
        await expect(this.filterTitle).toHaveText(this.expectedFilterTitle)
    }

}