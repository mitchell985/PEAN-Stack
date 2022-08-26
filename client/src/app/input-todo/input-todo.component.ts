import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { DatabaseService, ToDo } from '../database.service';

@Component({
  selector: 'app-input-todo',
  templateUrl: './input-todo.component.html',
  styleUrls: ['./input-todo.component.css']
})
export class InputTodoComponent {

  newToDo!: Observable<ToDo>;

  todoForm = this.formBuilder.group({
    description: null
  });

  constructor(
    private databaseService: DatabaseService,
    private formBuilder: FormBuilder
    ) { }

  onAdd() {
    if(!this.todoForm.value.description){
      window.alert('please enter text')
    }else{
      this.newToDo = this.databaseService.createTodo(String (this.todoForm.value.description));
    }
    this.todoForm.reset();
  }
}
