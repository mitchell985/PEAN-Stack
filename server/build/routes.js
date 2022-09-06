"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("./utils/db"));
const logger_1 = __importDefault(require("./utils/logger"));
function routes(app) {
    //ROUTES
    //create a todo
    //return 201 created
    app.post("/todos", (req, res) => __awaiter(this, void 0, void 0, function* () {
        //add me to handlers pls and as model service controller
        try {
            const { description } = yield req.body;
            const newTodo = yield db_1.default.query("INSERT INTO todo (description) VALUES($1) RETURNING *", [description]);
            console.log(newTodo.rows[0]);
            res.json(newTodo.rows[0]);
        }
        catch (e) {
            logger_1.default.error(e);
        }
    }));
    //get all todos
    app.get("/todos", (req, res) => __awaiter(this, void 0, void 0, function* () {
        try {
            const allTodos = yield db_1.default.query("SELECT * FROM todo ORDER BY todo_id ASC");
            console.log(allTodos.rows);
            res.json(allTodos.rows);
        }
        catch (e) {
            logger_1.default.error(e);
        }
    }));
    //get a todo
    app.get("/todos/:id", (req, res) => __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const todo = yield db_1.default.query("SELECT * FROM todo WHERE todo_id = $1", [
                id,
            ]);
            console.log(todo.rows[0]);
            res.json(todo.rows[0]);
        }
        catch (e) {
            logger_1.default.error(e);
        }
    }));
    //update a todo
    app.put("/todos/:id", (req, res) => __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const { description } = yield req.body;
            yield db_1.default.query("UPDATE todo SET description = $1 WHERE todo_id = $2", [
                description,
                id,
            ]);
            console.log(`Todo ${id} was updated`);
            res.json(`Todo ${id} was updated`);
        }
        catch (e) {
            logger_1.default.error(e);
        }
    }));
    //delete a todo
    app.delete("/todos/:id", (req, res) => __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const todo = yield db_1.default.query("DELETE FROM todo WHERE todo_id = $1", [
                id,
            ]);
            console.log(`Todo ${id} was deleted`);
            res.json(`Todo ${id} was deleted`);
        }
        catch (e) {
            logger_1.default.error(e);
        }
    }));
}
exports.default = routes;
