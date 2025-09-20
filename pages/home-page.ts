import { Page, Locator, expect } from "@playwright/test"

export class HomePage {

    mainTitle: Locator
    filterTitle: Locator

    searchBar: Locator

    newUsedFilterOption: Locator
    makeFilterOption: Locator
    modelFilterOption: Locator
    distanceFilterOption: Locator
    zipCodeInput: Locator
    showMatchesButton: Locator

    expectedUrl: string = 'https://www.cars.com/'
    expectedMainTitle: string = 'Imagine the possibilities'
    expectedFilterTitle: string = '- Or search by -'

    constructor(page: Page) {
        this.mainTitle = page.locator('h1[class="hero-title "] span')

        this.filterTitle = page.locator('spark-stack[class="search-bar-horizontal-or"] strong')
        this.newUsedFilterOption = page.locator('select[name="stock_type"]')
        this.makeFilterOption = page.locator('select[name="makes[]"]')
        this.modelFilterOption = page.locator('select[name="models[]"]')
        this.distanceFilterOption = page.locator('select[name="maximum_distance"]')
        this.zipCodeInput = page.locator('input[name="zip"]')
        this.showMatchesButton = page.locator('spark-button[trid="ispsHAiuJe1hiWnAnf44kA"]')

        this.searchBar = page.locator('input[name="one_hitter"]')
    }

    async mainTitleValidation(): Promise<void> {
        await expect(this.mainTitle).toHaveText(this.expectedMainTitle)
    }

    async filterTitleValidation(): Promise<void> {
        await expect(this.filterTitle).toHaveText(this.expectedFilterTitle)
    }

}