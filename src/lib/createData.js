import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const populationData = JSON.parse(
   fs.readFileSync(path.join(__dirname, "../json/countries-table.json"))
);
const costOfLivingData = JSON.parse(
   fs.readFileSync(
      path.join(__dirname, "../json/cost-of-living-by-country-2024.json")
   )
);
const crimeData = JSON.parse(
   fs.readFileSync(
      path.join(__dirname, "../json/crime-rate-by-country-2024.json")
   )
);
const createData = () => {
   const crimeRateMap = new Map();
   crimeData.forEach((country) => {
      crimeRateMap.set(country.country, {
         crimeIndex: country.crimeRateByCountry_crimeIndex,
         overallCriminalityScore: country.CrimeRate_OverallCriminalityScoreGOCI,
         criminalMarketsScore: country.CrimeRate_CriminalMarketsScore,
         criminalActorsScore: country.CrimeRate_CriminalActorsScore,
         resilienceScore: country.CrimeRate_ResilienceScore,
         safetyIndex: country.CrimeRateSafetyIndex,
      });
   });
   const costOfLivingMap = new Map();
   costOfLivingData.forEach((country) => {
      costOfLivingMap.set(country.country, {
         costOfLivingIndexNumbeo2023: country.NumbeoCoL2023,
         costOfLivingPlusRentIndexNumbeo2023: country.NumbeoCoLPlusRent2023,
         monthlyCostOfLiving: country.costOfLivingLC,
         costOfLivingIndexExpatistan:
            country.costOfLivingByCountry_cl_expatistan,
         costOfLivingIndexGlobalEconomy:
            country.costOfLivingByCountry_cl_globalEcon,
         localPurchasingPowerIndexNumbeo2023:
            country.NumbeoLocalPurchasingPowerIndex2023,
      });
   });

   const allData = [];
   const mergedData = populationData.map((countryInfo) => {
      const country = countryInfo.country;

      const crimeRate = crimeRateMap.get(country) || {
         crimeIndex: null,
         overallCriminalityScore: null,
         criminalMarketsScore: null,
         criminalActorsScore: null,
         resilienceScore: null,
         safetyIndex: null,
      };

      const costOfLiving = costOfLivingMap.get(country) || {
         costOfLivingIndexNumbeo2023: null,
         costOfLivingPlusRentIndexNumbeo2023: null,
         monthlyCostOfLiving: null,
         costOfLivingIndexExpatistan: null,
         costOfLivingIndexGlobalEconomy: null,
         localPurchasingPowerIndexNumbeo2023: null,
      };
      const result = {
         ...countryInfo,
         ...crimeRate,
         ...costOfLiving,
      };
      allData.push(result);
   });
   return allData;
};

export default createData;
