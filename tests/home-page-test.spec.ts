import {test, expect} from '@playwright/test'
import { HomePage } from '../pages/home-page'

let homePage: HomePage;

test.beforeEach(async ({page}) => {
    homePage = new HomePage(page)
    await page.goto('https://www.cars.com/')
})

test('Main title validation', async ({page}) => {
    await homePage.mainTitleValidation()
})

test('Filter title validation', async ({page}) => {
    await homePage.filterTitleValidation()
})