import dotenv from "dotenv";
dotenv.config();

export const envConfig = {
  port: Number(process.env.PORT) || 3000,
  databaseUrl: process.env.DATABASE_URL,
};
