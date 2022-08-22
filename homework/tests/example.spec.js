// @ts-check
const { test, expect } = require('@playwright/test');

  test.describe('Login ', () => {
    test('Login', async ({ page }) => {
      await page.goto('https://lunch.devbstaging.com/login-password');
      await page.locator('input[aria-label="Email"]').type('Greta.Gabrenaite@sourceryacademy.com');
      await page.locator('input[aria-label="Password"]').type('nera_svarbus51');
   
      
      await page.locator('div[class="v-btn__content"]').click();
      await page.pause();
    });
  });

  const data = [
    'Užsakymų istorija',
    'Užsakymų Sąrašas',
    'Patiekalų Įvertinimai'
  ]

  data.forEach(version => {
    test.describe(version +'Assert page menu ', () => {
      test('Assert page menu ', async ({ page }) => {
        await page.goto('https://lunch.devbstaging.com/login-password');
        await page.locator('input[aria-label="Email"]').type('Greta.Gabrenaite@sourceryacademy.com');
        await page.locator('input[aria-label="Password"]').type('nera_svarbus51');
        await page.locator('div[class="v-btn__content"]').click();
       


        await expect(page.locator('div[class="v-list__tile__title"]')).toBeVisible({timeout: 10000});
        //await expect(page.locator('div[class="v-list__tile__title"]')).toHaveValue(version);
      });
    });
  });
  