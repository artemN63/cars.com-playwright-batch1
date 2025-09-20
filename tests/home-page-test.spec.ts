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

// test('Search car in search bar validation', async ({page}) => {
//     await homePage.searchBar.fill('Porsche 911')
// })

test('Filter options validation', async ({page}) => {
    await homePage.newUsedFilterOption.selectOption('New & used')
    await homePage.makeFilterOption.selectOption('BMW')
    await homePage.modelFilterOption.selectOption('bmw-m3')
    await homePage.distanceFilterOption.selectOption('50')
    await homePage.zipCodeInput.fill('60016')
    await homePage.showMatchesButton.click()

    
})