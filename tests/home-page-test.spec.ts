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

test('Filter options validation', async ({page}) => {
    let make = 'bmw'
    let model = 'bmw-m3'

    await homePage.searchCarWithFilters(make, model, '40', '60016')
    await carsForSalePage.filtersValidation(' BMW ', ' M3 ')
})