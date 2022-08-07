/**
 * Takes http routes and forwards to a controller
 */
import { Express, Request, Response } from "express";
import logger from "./utils/logger";

function routes(app: Express) {
  //ROUTES

  //create a todo
  app.post("/todos", async (req, res) => {
    try {
        const body = await req.body
        console.log(body)
    } catch (e) {
        logger.error(e)
    }
  });

  //get all todos

  //get a todo

  //update a todo

  //delete a todo
}

export default routes;
