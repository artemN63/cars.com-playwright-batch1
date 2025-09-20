import { Page, Locator, expect } from "@playwright/test"

export class CarsForSale {

    makeFilterOption: Locator
    modelFilterOption: Locator
    conditionFilterOption: Locator

    constructor(page: Page) {
        this.makeFilterOption = page.locator('')
        this.modelFilterOption = page.locator('')
        this.conditionFilterOption = page.locator('')
    }

}