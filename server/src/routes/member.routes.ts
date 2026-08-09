import { Router } from "express";
import { getAllMembers, addMember } from "../controllers/member.controller";

const memberRouter = Router();

memberRouter.get("/", getAllMembers);
memberRouter.post("/", addMember);

export default memberRouter;
