import {test, expect} from '@playwright/test'
import { CarsForSalePage } from '../pages/cars-for-sale-page';

let carsForSalePage: CarsForSalePage;

test.beforeEach(async ({page}) => {
    carsForSalePage = new CarsForSalePage(page)
    await page.goto
    ('https://www.cars.com/shopping/results/?stock_type=all&makes%5B%5D=bmw&models%5B%5D=bmw-m3&maximum_distance=40&zip=60016')
})

test('Main title validation', async ({page}) => {
    await carsForSalePage.validateSelectorText()
})