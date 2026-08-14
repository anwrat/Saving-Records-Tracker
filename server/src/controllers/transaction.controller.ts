import { prisma } from "../config/prisma.config";
import { Request, Response, NextFunction } from "express";

export const getAllTransactionForMember = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { memberId } = req.params;
    const { type, startDate, endDate, minAmount, maxAmount } = req.query;
    const whereClause: any = { memberId };
    if (type) {
      whereClause.type = type;
    }
    //Filter by Date Range
    if (startDate || endDate) {
      whereClause.transactionDate = {};
      if (startDate) {
        whereClause.transactionDate.gte = new Date(startDate as string);
      }
      if (endDate) {
        whereClause.transactionDate.lte = new Date(endDate as string);
      }
    }
    //Filter by Amount Range
    if (minAmount || maxAmount) {
      whereClause.amount = {};
      if (minAmount) {
        whereClause.amount.gte = parseFloat(minAmount as string);
      }
      if (maxAmount) {
        whereClause.amount.lte = parseFloat(maxAmount as string);
      }
    }
    const transactions = await prisma.savingTransactions.findMany({
      where: whereClause,
      orderBy: {
        transactionDate: "desc",
      },
    });
    res.status(200).json(transactions);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

//Works for all deposit, withdrawal and interest transactions
export const createTransaction = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { memberId, amount, transactionDate, description, type } = req.body;
    const newTransaction = await prisma.savingTransactions.create({
      data: {
        memberId,
        amount,
        transactionDate: new Date(transactionDate),
        description,
        type,
      },
    });
    res.status(201).json({
      message: "Transaction created successfully",
      transaction: newTransaction,
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};
