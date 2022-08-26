import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { catchError, Observable } from 'rxjs';

//add error checking

export interface ToDo {
  "todo_id": number;
  "description": string;
}

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private readonly ROOT_URL = 'http://localhost:5000'

  constructor(
    private http: HttpClient
  ) { }

  createTodo(description: string) {
    const data = {
      "description": description
    }
    return this.http.post<ToDo>(this.ROOT_URL + '/todos', data);
  }

  getTodoList() {
    return this.http.get<ToDo []>(this.ROOT_URL + '/todos')
  }

  updateTodo(todo: ToDo) {
    const data = {
      "description": todo.description
    }
    return this.http.put(this.ROOT_URL + '/todos/' + todo.todo_id, data)
  }

  deleteTodo(todo_id: number) {
    return this.http.delete(this.ROOT_URL + '/todos/' + todo_id)
  }
}

