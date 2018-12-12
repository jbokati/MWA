import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bumb',
  template : `<li> {{names}} </li>`,
  styleUrls: ['./bumb.component.css']
})
export class BumbComponent implements OnInit {
  @Input() names;
  constructor() { }

  ngOnInit() {
  }

}
