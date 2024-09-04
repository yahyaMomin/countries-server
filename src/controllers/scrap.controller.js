import puppeteer from "puppeteer-core";

export const scrapeCostOfLiving = async () => {
   try {
      const browser = await puppeteer.launch({
         headless: true,
      });
      const page = await browser.newPage();
      await page.goto(
         "https://www.numbeo.com/cost-of-living/rankings_by_country.jsp"
      );
      const tableData = await page.evaluate(() => {
         const selector = "table";
         page.waitForSelector(selector);
         const table = document.querySelector(".dataTable");
         return table;
      });
      console.log(tableData);
      browser.close();
   } catch (error) {
      console.log(error.message);
   }
};
