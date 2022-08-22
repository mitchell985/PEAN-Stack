import { Pool } from "pg";
import * as dotenv from "dotenv";

dotenv.config({ path: "../.env" });

const pool = new Pool({
  user: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  database: process.env.POSTGRESS_DB,
});

// const pool = process.env.POSTGRES_USERNAME

export default pool;
