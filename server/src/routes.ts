/**
 * Takes http routes and forwards to a controller
 */
import { Express, Request, Response } from "express";
import pool from "./utils/db";
import logger from "./utils/logger";

function routes(app: Express) {
  //ROUTES

  //create a todo
  //return 201 created
  app.post("/todos", async (req, res) => {
    //add me to handlers pls and as model service controller
    try {
      const { description } = await req.body;
      const newTodo = await pool.query(
        "INSERT INTO todo (description) VALUES($1) RETURNING *",
        [description]
      );
      console.log(newTodo.rows[0]);
      res.json(newTodo.rows[0]);
    } catch (e) {
      logger.error(e);
    }
  });

  //get all todos
  app.get("/todos", async (req, res) => {
    try {
      const allTodos = await pool.query("SELECT * FROM todo ORDER BY todo_id ASC");
      console.log(allTodos.rows)
      res.json(allTodos.rows);
    } catch (e) {
      logger.error(e);
    }
  });

  //get a todo
  app.get("/todos/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [
        id,
      ]);
      console.log(todo.rows[0])
      res.json(todo.rows[0]);
    } catch (e) {
      logger.error(e);
    }
  });

  //update a todo
  app.put("/todos/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const { description } = await req.body;
      await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2", [
        description,
        id,
      ]);
      console.log(`Todo ${id} was updated`);
      res.json(`Todo ${id} was updated`);
    } catch (e) {
      logger.error(e);
    }
  });

  //delete a todo
  app.delete("/todos/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const todo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [
        id,
      ]);
      console.log(`Todo ${id} was deleted`);
      res.json(`Todo ${id} was deleted`);
    } catch (e) {
      logger.error(e);
    }
  });
}

export default routes;
