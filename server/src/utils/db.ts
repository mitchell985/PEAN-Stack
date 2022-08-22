import { Pool } from "pg";
import * as dotenv from "dotenv";
import logger from "./logger";

dotenv.config({ path: "../.env" });

const pool = new Pool({
  user: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  database: process.env.POSTGRESS_DB,
  //ssl: true
});

export function dbConnectTest() {
  try {
    pool.connect();
    logger.info("Database Connected!");
  } catch (e) {
    logger.error("Can't connect to DB");
    logger.error(e);
  }
}

export default pool;
