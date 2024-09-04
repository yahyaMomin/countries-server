import express from "express";
import cors from "cors";
import { config } from "dotenv";
import createData from "./lib/createData.js";
import countriesRoutes from "./routes/countries.routes.js";

// createData()
const app = express();

app.use(
   cors({
      origin: "https://worldswikipedia.vercel.app/",
   })
);
app.use(express.json());
config();

app.use("/api/v1/countries", countriesRoutes);

export default app;
