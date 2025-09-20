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

    // Your Garage - Block
    yourGarageTitle: Locator
    yourGarageSubTitle: Locator
    yourGarageDescription: Locator
    learMoreLinkText: Locator
    getStartedButton: Locator
    haveAccountText: Locator
    signInLinkText: Locator

    constructor(page: Page) {
        this.mainTitle = page.locator('h1[class="hero-title "] span')

        this.filterTitle = page.locator('spark-stack[class="search-bar-horizontal-or"] strong')
        this.newUsedFilterOption = page.locator('select[name="stock_type"]')
        this.makeFilterOption = page.locator('select[name="makes[]"]')
        this.modelFilterOption = page.locator('select[name="models[]"]')
        this.distanceFilterOption = page.locator('select[name="maximum_distance"]')
        this.zipCodeInput = page.locator('input[name="zip"]')
        this.showMatchesButton = page.locator('spark-fieldset[variant="melded"] spark-button')

        this.yourGarageTitle = page.locator('div[class="widget"] h2[class="spark-heading-3"]')
        this.yourGarageSubTitle = page.locator('div[class="widget"] h3[role="presentation"]')
        this.yourGarageDescription = page.locator('div[class="widget__contents"] p').nth(0)
        this.learMoreLinkText = page.locator('a[href="/profile/your-garage"]')
        this.getStartedButton = page.locator('spark-button[class="add-car"]')
        this.haveAccountText = page.getByText('Already have an account? Sign in')
        this.signInLinkText = page.locator('spark-button[id="sign-in"]')

        this.searchBar = page.locator('input[name="one_hitter"]')
    }

    async mainTitleValidation(): Promise<void> {
        await expect(this.mainTitle).toHaveText(this.expectedMainTitle)
    }

    async filterTitleValidation(): Promise<void> {
        await expect(this.filterTitle).toHaveText(this.expectedFilterTitle)
    }

    async searchCarWithFilters(make: string, model: string, distance: string, zipCode: string): Promise<void> {
        await this.makeFilterOption.selectOption(make)
        await this.modelFilterOption.selectOption(model)
        await this.distanceFilterOption.selectOption(distance)
        await this.zipCodeInput.fill(zipCode)
        await this.showMatchesButton.click()
    }

    async yourGarageBlockElementsValidation(): Promise<void> {
        await expect(this.yourGarageTitle).toHaveText('Your Garage')
        await expect(this.yourGarageSubTitle).toHaveText('Add your car. Track its value.')
        await expect(this.yourGarageDescription).toHaveText
        ('Add your car to Your Garage to track its market value and cash in when the time is right to sell. Learn more')
        await expect(this.learMoreLinkText).toHaveText('Learn more')
        await expect(this.getStartedButton).toHaveText('Get started')
        //await expect(this.haveAccountText).toHaveText('Already have an account? Sign in')
        await expect(this.signInLinkText).toHaveText('Sign in')
    }

}