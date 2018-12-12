import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smart',
  templateUrl: './smart.component.html',
  styleUrls: ['./smart.component.css']
})
export class SmartComponent implements OnInit {
  strArray = ['jhonson','bokati','mahendranagar','kanchanpur']
  constructor() { }

  ngOnInit() {
  }

}
