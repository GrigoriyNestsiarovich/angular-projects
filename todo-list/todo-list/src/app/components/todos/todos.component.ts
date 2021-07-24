import { Component, OnInit, Output } from '@angular/core';
import { DEFAULT_TODOS } from 'src/app/utils/utilities';
import { Todo } from './../../models/todo'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  title = 'todo list';
  inputToDo: string = '';
  todos: Todo[];
  amount: number;

  constructor() { }

  ngOnInit(): void {
    this.todos = localStorage.getItem('state')
      ? JSON.parse(<string>localStorage.getItem('state'))
      : DEFAULT_TODOS;
  }

  saveInLocalStorage(state: string): void {
    localStorage.setItem('state', state);
  }

  toggleDone(id: number): void {
    this.todos.map((val, index) => index === id
      ? val.completed = !val.completed
      : val);
    this.saveInLocalStorage(JSON.stringify(this.todos));
  }

  createTodo(): void {
    if (this.inputToDo) {
      this.todos.push({
        content: this.inputToDo,
        completed: false,
        editing: false
      });
    }

    this.inputToDo = '';
    this.saveInLocalStorage(JSON.stringify(this.todos));
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter((val, index) => index !== id);
    this.saveInLocalStorage(JSON.stringify(this.todos));
  }

  getUncomletedTasksAmount(): number {
    return this.todos.filter(todo => !todo.completed).length;
  }

  onEditClicked(id: number) {
    this.todos.map((val, index) => index === id
      ? val.editing = !val.editing
      : val);
    this.saveInLocalStorage(JSON.stringify(this.todos));
  }

  selectAllTodos(): void {
    this.todos.forEach((todo) => {
      todo.completed = true;
    });
    this.saveInLocalStorage(JSON.stringify(this.todos));
  }

  atLeastOneSelected(): boolean {
    return this.todos.filter(todo => todo.completed).length > 0;
  }

  deleteSelectedTotod(): void {
    this.todos = this.todos.filter(todo => !todo.completed);
    this.saveInLocalStorage(JSON.stringify(this.todos));
  }
}
