import mongoose from "mongoose";

const countriesSchema = new mongoose.Schema({
   country: { type: mongoose.Schema.Types.Mixed },
   place: { type: mongoose.Schema.Types.Mixed },
   pop1980: { type: mongoose.Schema.Types.Mixed },
   pop2000: { type: mongoose.Schema.Types.Mixed },
   pop2010: { type: mongoose.Schema.Types.Mixed },
   pop2023: { type: mongoose.Schema.Types.Mixed },
   pop2024: { type: mongoose.Schema.Types.Mixed },
   pop2030: { type: mongoose.Schema.Types.Mixed },
   pop2050: { type: mongoose.Schema.Types.Mixed },
   area: { type: mongoose.Schema.Types.Mixed },
   landAreaKm: { type: mongoose.Schema.Types.Mixed },
   cca2: { type: mongoose.Schema.Types.Mixed },
   cca3: { type: mongoose.Schema.Types.Mixed },
   unMember: { type: mongoose.Schema.Types.Mixed },
   netChange: { type: mongoose.Schema.Types.Mixed },
   growthRate: { type: mongoose.Schema.Types.Mixed },
   worldPercentage: { type: mongoose.Schema.Types.Mixed },
   density: { type: mongoose.Schema.Types.Mixed },
   densityMi: { type: mongoose.Schema.Types.Mixed },
   rank: { type: mongoose.Schema.Types.Mixed },
   crimeIndex: { type: mongoose.Schema.Types.Mixed },
   overallCriminalityScore: { type: mongoose.Schema.Types.Mixed },
   criminalMarketsScore: { type: mongoose.Schema.Types.Mixed },
   criminalActorsScore: { type: mongoose.Schema.Types.Mixed },
   resilienceScore: { type: mongoose.Schema.Types.Mixed },
   safetyIndex: { type: mongoose.Schema.Types.Mixed },
   costOfLivingIndexNumbeo2023: { type: mongoose.Schema.Types.Mixed },
   costOfLivingPlusRentIndexNumbeo2023: { type: mongoose.Schema.Types.Mixed },
   monthlyCostOfLiving: { type: mongoose.Schema.Types.Mixed },
   costOfLivingIndexExpatistan: { type: mongoose.Schema.Types.Mixed },
   costOfLivingIndexGlobalEconomy: { type: mongoose.Schema.Types.Mixed },
   localPurchasingPowerIndexNumbeo2023: { type: mongoose.Schema.Types.Mixed },
});

const countriesModel = mongoose.model("country", countriesSchema);

export default countriesModel;
