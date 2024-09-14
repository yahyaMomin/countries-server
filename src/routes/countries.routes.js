import express from "express";
import {
   getAllCountries,
   getMultipleCountries,
   getSearchCountries,
   getSingleCountry,
} from "../controllers/countries.controllers.js";

const router = express.Router();

router.get("/", getAllCountries);
router.get("/multiple", getMultipleCountries);
router.get("/:id", getSingleCountry);
router.get("/search/:search", getSearchCountries);

export default router;
