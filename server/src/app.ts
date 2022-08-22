import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import logger from "./utils/logger";
import routes from "./routes";
import { dbConnectTest } from "./utils/db"

dotenv.config({ path: "../.env" });

const port = process.env.EXPRESS_PORT;

const app = express();

//middleware
app.use(cors());
app.use(express.json());

//routes
routes(app);

app.listen(port, () => {
  logger.info(`Server has started on port ${port}`);

  dbConnectTest();
});
