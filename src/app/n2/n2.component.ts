import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-n2',
  templateUrl: './n2.component.html',
  styleUrls: ['./n2.component.css']
})
export class N2Component implements OnInit {

  constructor(private todoService: TodoService) { }

  ngOnInit() {



  } }
