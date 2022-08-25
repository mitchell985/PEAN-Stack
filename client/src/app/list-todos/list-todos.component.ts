import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { DatabaseService, ToDo } from '../database.service';//ToDo type import good pratice?

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  constructor(private databaseService: DatabaseService) { }

  todoList!: Observable<ToDo []>;

  ngOnInit(): void {
    this.todoList = this.databaseService.getTodoList();
  }

}
