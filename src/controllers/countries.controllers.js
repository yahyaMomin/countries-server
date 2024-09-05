import countriesModel from "../models/countries.model.js";

export const getAllCountries = async (req, res) => {
   try {
      const { sortBy = "place", order = "highest" } = req.query;

      // Determine sort order
      let sortOrder = order === "lowest" ? 1 : -1;
      if (sortBy === "place") sortOrder = order === "lowest" ? -1 : 1;

      // Sort by field
      const allCountries = await countriesModel
         .find()
         .sort({ [sortBy]: sortOrder })
         .exec();

      // Separate non-null and null entries
      const nonNullCountries = allCountries.filter(
         (country) => country[sortBy] !== null
      );
      const nullCountries = allCountries.filter(
         (country) => country[sortBy] === null
      );

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
