import { test, expect } from '@playwright/test';

test('mobile score', async ({ page }) => {
  await page.goto('https://pagespeed.web.dev/');
  await page.getByPlaceholder('Enter a web page URL').fill('https://www.answerconnect.com/');
  await page.getByRole('button', { name: 'Analyze' }).click();
 const valueofMobileScore = await page.locator("(//div[@class='lh-gauge__percentage'])[9]").textContent();
 console.log('The mobile score is' , valueofMobileScore);
 if (valueofMobileScore < 80 ){
  console.log('send a notification to team. the mobile score is low ');
 }
});

test('desktop score', async({page})=>{
    await page.goto('https://pagespeed.web.dev/');
    await page.getByPlaceholder('Enter a web page URL').fill('https://www.answerconnect.com/');    
    await page.getByRole('button', { name: 'Analyze' }).click();
    await page.getByRole('tab', { name: 'Desktop' }).click();
    const valueofDesktopScore =  await page.locator("(//div[@class='lh-gauge__percentage'])[21]").textContent();
    console.log('the desktop score is', valueofDesktopScore);
    if(valueofDesktopScore < 80){
      console.log('score is low send notification to team. the desktop score is low  ');
    }
 
})