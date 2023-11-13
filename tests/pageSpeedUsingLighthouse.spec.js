import {playAudit} from 'playwright-lighthouse'
import playwright from 'playwright';
import { test , expect} from '@playwright/test'

test('page speed ' , async(playwright)=>{
   const browser = await playwright.chromium.launch({args: ['--remote-debugging-port=9222']});
   const context = await browser.newContext();
   const page =  await context.newPage();
   await page.goto('https://www.answerconnect.com/')
})
