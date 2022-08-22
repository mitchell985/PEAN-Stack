/**
 * Takes http routes and forwards to a controller
 */
import { Express, Request, Response } from "express";
import { describe } from "node:test";
import pool from "./utils/db";
import logger from "./utils/logger";

function routes(app: Express) {
  //ROUTES

  //create a todo
  app.post("/todos", async (req, res) => {
    try {
      const { description } = await req.body;
      const newTodo = await pool.query(
        "INSERT INTO todo (description) VALUES($1)",
        [description]
      );

      // console.log(pool)

      res.json(newTodo);
    } catch (e) {
      logger.error(e);
    }
  });

  //get all todos

  //get a todo

  //update a todo

  //delete a todo
}

export default routes;
