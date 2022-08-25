import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

export interface ToDo {
  "todo_id": number;
  "description": string;
}

const apiAddress = `http://localhost:5000/todos`

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(
    private http: HttpClient
  ) { }

  createTodo(todo: ToDo) {
    return this.http.post(apiAddress, todo.description);
  }

  getTodoList() {
    return this.http.get<ToDo []>(apiAddress)
  }

  updateTodo(todo: ToDo) {
    return this.http.put(`${apiAddress}/${todo.todo_id}`, todo.description)
  }

  deleteTodo(todo_id: number) {
    return this.http.delete(`${apiAddress}/${todo_id}`)
  }
}
