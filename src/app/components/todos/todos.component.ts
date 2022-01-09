import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content: "Web API to save tasks from the session",
        completed: false
      },
      {
        content: "Move content into a container with 1200px max-width",
        completed: false
      }
    ];
  }

  todos: Todo[];
  inputTodo: string = "";

  toggleDone(id: number) {
    this.todos.map((v, i) => {
      if (i == id) {
        v.completed = !v.completed;
        return v;
      }
    })
  }
  deleteTodo(id: number) {
    this.todos = this.todos.filter((v, i) => i !== id);
  }
  addTodo() {
    if (this.inputTodo !== "") {
      this.todos.push({
        content: this.inputTodo,
        completed: false
      });
    }
    this.inputTodo = "";
  }
}
