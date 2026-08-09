import { prisma } from "../config/prisma.config";
import { Request, Response, NextFunction } from "express";

export const getAllMembers = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const members = await prisma.members.findMany();
    return res.status(200).json(members);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

export const addMember = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { name, email, armyNo, phone, address } = req.body;
    const newMember = await prisma.members.create({
      data: {
        name,
        email,
        armyNo,
        phone,
        address,
      },
    });
    return res
      .status(201)
      .json({ message: "Member created successfully", member: newMember });
  } catch (err) {
    next(err);
  }
};
