import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lab 12';
  ComponentCounterValue = 5;

  counterChange(data){
     this.ComponentCounterValue = data;
  }
  
}
