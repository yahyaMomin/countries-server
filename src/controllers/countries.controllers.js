import countriesModel from "../models/countries.model.js";

export const getAllCountries = async (req, res) => {
   try {
      const { sortBy, order } = req.query;

      const sortField = sortBy || "place";
      const sortOrder = order === "lowest" ? 1 : -1;

      //   const allCountries = await countriesModel
      //      .find()
      //      .sort({ [sortField]: sortOrder });

      const nonNullCountries = await countriesModel
         .find({
            [sortField]: { $ne: null },
         })
         .sort({ [sortField]: sortOrder })
         .exec();
      const nullCountries = await countriesModel
         .find({ [sortField]: null })
         .exec();

      res.status(200).json({
         status: "success",
         countries: [...nonNullCountries, ...nullCountries],
      });
   } catch (error) {
      return res.status(500).json({ status: "error", msg: error.message });
   }
};

export const getSingleCountry = async (req, res) => {
   try {
      const { id } = req.params;
      const country = await countriesModel.findById(id);
      if (!country)
         return res
            .status(500)
            .json({ status: "error", msg: "country not found " });
      return res.status(200).json({ status: "success", country });
   } catch (error) {
      return res.status(500).json({ status: "error", msg: error.message });
   }
};

export const getSearchCountries = async (req, res) => {
   try {
      const { search } = req.params;
      const searchCountries = await countriesModel.find({
         country: { $regex: search, $options: "i" },
      });
      return res
         .status(200)
         .json({ status: "success", countries: searchCountries });
   } catch (error) {
      return res.status(500).json({ status: "error", msg: error.message });
   }
};
