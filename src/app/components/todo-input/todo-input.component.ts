import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {

  private todoText: string;
  constructor(private todoService: TodoService) {
    this.todoText = '';
   }

  ngOnInit() {
    const dateYear = new Date().getFullYear();
    const dateMonth = new Date().getMonth();
    const dateDay = new Date().getDate();
    const dateHour = new Date().getHours();
    const dateMinute = new Date().getMinutes();

    console.log(dateYear);
    console.log(dateMonth);
    console.log(dateDay);
    console.log(dateHour);
    console.log(dateMinute);
  }

  private addTodo(): void {
    this.todoService.addTodo(this.todoText);
   this.todoText = '';
  }


  // private addDate(): void {
  //   const dateYear = new Date().getFullYear();
  //   const dateMonth = new Date().getMonth();
  //   const dateDay = new Date().getDate();
  //   const dateHour = new Date().getHours();
  //   const dateMinute = new Date().getMinutes();

  //   console.log(dateYear);
  //   console.log(dateMonth);
  //   console.log(dateDay);
  //   console.log(dateHour);
  //   console.log(dateMinute);
  // }


}
