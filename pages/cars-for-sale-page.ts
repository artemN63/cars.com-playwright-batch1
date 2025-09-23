import { Page, Locator, expect } from "@playwright/test"

export class CarsForSalePage {

    tags: Locator

    newUsedSelector: Locator
    makeSelector: Locator
    distanceSelector: Locator
    zipCodeInput: Locator

    constructor(page: Page) {
        this.tags = page.locator('div[id="active_filter_tags"]')

        this.newUsedSelector = page.getByLabel('New/used')
        this.makeSelector = page.getByLabel('Make')
        this.distanceSelector = page.getByLabel('Search within')
        this.zipCodeInput = page.getByLabel('ZIP')
    }

    async filtersValidation(expectedTags: string[]): Promise<void> {
        for(let i = 0; i < expectedTags.length; i++) {
            let actualCurrentTagElement = this.tags.getByText(expectedTags[i])

            await expect(actualCurrentTagElement).toHaveText(expectedTags[i])
            await expect(actualCurrentTagElement).toBeVisible()
        }
    }

    async validateSelectorText(): Promise<void> {
        await expect(this.newUsedSelector).toContainText('New & Used')
        await expect(this.makeSelector).toContainText('BMW')
        await expect(this.distanceSelector).toContainText('40 miles')
        await expect(this.zipCodeInput).toHaveValue('60016')
    }

}