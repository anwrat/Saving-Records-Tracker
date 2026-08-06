import express from "express";
import { errorHandler } from "./middlewares/error.middleware";

const app = express();
app.use(express.json());

//Global middleware should be after routes
app.use(errorHandler);

export default app;
