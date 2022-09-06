import { Pool } from "pg";
import * as dotenv from "dotenv";
import logger from "./logger";
import { setTimeout } from "timers/promises"

dotenv.config({ path: "../.env" });

const pool = new Pool({
  user: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  database: process.env.POSTGRESS_DB,
  //ssl: true
});

export async function dbConnectTest() {
  try {
    await pool.connect();
    logger.info("Database Connected!");
  } catch (e) {
    logger.error("Can't connect to DB");
    logger.error("Trying again in 5 seconds")
    logger.error(e);
    await setTimeout(5000);
    dbConnectTest();
  }
}

export default pool;
