import {test, expect} from '@playwright/test'
import { HomePage } from '../pages/home-page'
import { CarsForSalePage } from '../pages/cars-for-sale-page';

let homePage: HomePage;
let carsForSalePage: CarsForSalePage;

test.beforeEach(async ({page}) => {
    homePage = new HomePage(page)
    carsForSalePage = new CarsForSalePage(page)
    await page.goto('https://www.cars.com/')
})

test('Main title validation', async ({page}) => {
    await homePage.mainTitleValidation()
})

test('Filter title validation', async ({page}) => {
    await homePage.filterTitleValidation()
})

test('Your Garage block text validation', async ({page}) => {
    await homePage.yourGarageBlockElementsValidation()
})

test('Filter options validation', async ({page}) => {
    await homePage.searchCarWithFilters('bmw', 'bmw-m3', '40', '60016')

    let expectedTags = ['BMW', 'M3']
    await carsForSalePage.filtersValidation(expectedTags)
})