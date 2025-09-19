import {test, expect} from '@playwright/test'
import { HomePage } from '../pages/home-page'

test.beforeEach(async ({page}) => {
    await page.goto('https://www.cars.com/')
})

test('Main title validation', async ({page}) => {
    let homePage = new HomePage(page)

    await homePage.mainTitleValidation()
})

test('Filter title validation', async ({page}) => {
    let homePage = new HomePage(page)

    await homePage.filterTitleValidation()
})