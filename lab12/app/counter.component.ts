import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h2> 
  Counter Component </h2>
  <p> Input Counter {{counter}} </p>

     <button (click)="decrement()">-</button>
   {{counterValue}}
   <button (click)="increment()">+</button>
   `,
  styles: ['.para{width:100px}']
})
export class CounterComponent implements OnInit {
  counterValue = 0;
  CounterComponentValue = this.counterValue;
  @Input('counter') counter;
  @Output() counterChange;
  constructor() {
    this.counterChange = new EventEmitter();
   }

  ngOnInit() {
    this.counterValue = this.counter;

  }
  increment(){
    this.counterValue++;
    this.counterChange.emit(this.counterValue);
  }
  
  decrement(){
    this.counterValue--;
    this.counterChange.emit(this.counterValue);

  }
}
