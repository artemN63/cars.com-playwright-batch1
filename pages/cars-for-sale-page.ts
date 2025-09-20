import { Page, Locator, expect } from "@playwright/test"

export class CarsForSalePage {

    tags: Locator

    constructor(page: Page) {
        this.tags = page.locator('div[id="active_filter_tags"]')
    }

    async filtersValidation(expectedTags: string[]): Promise<void> {
        for(let i = 0; i < expectedTags.length; i++) {
            let actualCurrentTagElement = this.tags.getByText(expectedTags[i])

            await expect(actualCurrentTagElement).toHaveText(expectedTags[i])
            await expect(actualCurrentTagElement).toBeVisible()
        }
    }

}