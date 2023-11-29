import {playAudit} from 'playwright-lighthouse'
import playwright from 'playwright';
import { test , expect} from '@playwright/test'

test.only('page speed ' , async({playwright})=>{
   const browser = await playwright.chromium.launch({args: ['--remote-debugging-port=9222']});
   const context = await browser.newContext();
   const page =  await context.newPage();
   await page.goto('example.com')

   const lighthouseResult = await playAudit({
    page: page,
    thresholds:{
        performance: 70,
        accessibility : 80,
        'best-practices': 80,
        seo: 80
    },
   // ignoreError: true,
    port : 9222,
    reports:{
        formats:{
            json: true,
            html: true
        },
        name: 'lighthouse-report',
    }
   })
   await browser.close();
  
})
