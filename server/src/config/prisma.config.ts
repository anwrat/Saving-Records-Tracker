import { PrismaClient } from "../generated/prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { envConfig } from "./env.config";

const adapter = new PrismaBetterSqlite3({
  url: envConfig.databaseUrl!,
});

export const prisma = new PrismaClient({
  adapter,
});
