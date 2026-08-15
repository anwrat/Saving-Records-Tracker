import { Router } from "express";
import { getAllRates, createRate } from "../controllers/rates.controller";

const ratesRouter = Router();

ratesRouter.get("/", getAllRates);
ratesRouter.post("/", createRate);

export default ratesRouter;
