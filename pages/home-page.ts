import { Page, Locator, expect } from "@playwright/test"

export class HomePage {

    mainTitle: Locator

    expectedUrl: string = 'https://www.cars.com/'

    constructor(page: Page) {
        this.mainTitle = page.locator('h1[class="hero-title "] span')
    }

    async titleValidation(expectedTitle): Promise<void> {
        await expect(this.mainTitle).toHaveText(expectedTitle)
    }

}