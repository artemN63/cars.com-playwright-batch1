import { Page, Locator, expect } from "@playwright/test"

export class CarsForSalePage {

    makeFilterOption: Locator
    modelFilterOption: Locator

    constructor(page: Page) {
        this.makeFilterOption = page.locator('span[class="sds-filter sds-filter--applied active-filter-tag"]').nth(1)
        this.modelFilterOption = page.locator('span[class="sds-filter sds-filter--applied active-filter-tag"]').nth(2)
    }

    filtersValidation(make: string, model: string): void {
        expect(this.makeFilterOption).toHaveText(make)
        expect(this.modelFilterOption).toHaveText(model)
    }

}