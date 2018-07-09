import { Component, Injectable } from '@angular/core';

@Injectable()
export class TodoService {

  private nextId: number;
  constructor () {
    const todos = this.getTodos();

    if (todos.length === 0) {
      this.nextId = 0;
    } else {
      const maxId = todos[todos.length - 1].id;
      this.nextId = maxId + 1;
    }
  }

public addTodos (text: string): void {
  const todo = new Todo (this.nextId, text);
  this.todos = this.getTodos();
  todos.push(todo);

  this.setLocalStorageTodos(todos)
  this.nextId++;
}
public getTodos(): Todo[] {
  const localStorageItem = JSON.parse(localStorage.getItem('todos'));
  return localStorage == null ? [] : localStorageItem.todos;
}

public removeTodo (id: number): void {
  let todos = this.getTodos();
  todos = todos.filter((todo) => todo.id != id);
  this.setLocalStorageTodos(todos);
}

private setLocalStorageTodos(todos: Todo[]): void {
  localStorage.setItem('todo', JSON.stringify({todos: todos}))
}

}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}


