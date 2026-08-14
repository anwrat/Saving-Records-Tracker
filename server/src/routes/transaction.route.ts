import { Router } from "express";
import {
  getAllTransactionForMember,
  createTransaction,
} from "../controllers/transaction.controller";

const transactionRouter = Router();

transactionRouter.get("/:memberId", getAllTransactionForMember);
transactionRouter.post("/", createTransaction);

export default transactionRouter;
