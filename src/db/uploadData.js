import mongoose from "mongoose";
import createData from "../lib/createData.js";
import countriesModel from "../models/countries.model.js";

const uploadData = async () => {
   try {
      //   const data = createData();
      //   const result = await countriesModel.insertMany(data);
      //   console.log(result.length);
   } catch (error) {
      console.log(error.message);
   }
};

export default uploadData;
