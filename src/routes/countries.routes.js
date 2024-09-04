import express from "express";
import {
   getAllCountries,
   getSearchCountries,
   getSingleCountry,
} from "../controllers/countries.controllers.js";

const router = express.Router();

router.get("/", getAllCountries);
router.get("/:id", getSingleCountry);
router.get("/search/:search", getSearchCountries);

export default router;
