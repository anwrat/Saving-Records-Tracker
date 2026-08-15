import { prisma } from "../config/prisma.config";
import { Request, Response, NextFunction } from "express";

export const getAllRates = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const rates = await prisma.interestRate.findMany();
    res.status(200).json(rates);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export const createRate = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { type, rate } = req.body;
    const newRate = await prisma.interestRate.create({
      data: {
        type,
        rate,
      },
    });
    res.status(201).json(newRate);
  } catch (err) {
    console.error(err);
    next(err);
  }
};
