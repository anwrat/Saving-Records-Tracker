import express from "express";
import cors from "cors";
import helmet from "helmet";
import { errorHandler } from "./middlewares/error.middleware";
import userRouter from "./routes/user.routes";
import memberRouter from "./routes/member.routes";
import transactionRouter from "./routes/transaction.route";
import ratesRouter from "./routes/rates.routes";

const app = express();
app.use(cors());
app.use(helmet());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Server is running" });
});

app.use("/api/users", userRouter);
app.use("/api/members", memberRouter);
app.use("/api/transactions", transactionRouter);
app.use("/api/rates", ratesRouter);

//Global middleware should be after routes
app.use(errorHandler);

export default app;
