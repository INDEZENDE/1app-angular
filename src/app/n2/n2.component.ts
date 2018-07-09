import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-n2',
  templateUrl: './n2.component.html',
  styleUrls: ['./n2.component.css']
})
export class N2Component implements OnInit {

  constructor() { }

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
    console.log(dateMinute)

  } }
