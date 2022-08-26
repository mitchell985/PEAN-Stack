import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DatabaseService, ToDo } from '../database.service';

//import { Observable } from 'rxjs';
//import { DatabaseService, ToDo } from '../database.service';//ToDo type import good pratice?

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  readonly ROOT_URL = 'http://localhost:5000'

  todoList!: Observable<ToDo[]>;
  deleteTodo!: Observable<Object>;//the observable is a subscribable stream... interesting...

  constructor(private databaseService: DatabaseService) { }

  ngOnInit(): void {
    this.todoList = this.databaseService.getTodoList();
  }

  getTodoList() {
    this.todoList = this.databaseService.getTodoList();
  }

  onDelete(todo_id: number) {
    this.deleteTodo = this.databaseService.deleteTodo(todo_id)
  }

}
