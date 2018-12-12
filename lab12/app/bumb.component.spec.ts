import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BumbComponent } from './bumb.component';

describe('BumbComponent', () => {
  let component: BumbComponent;
  let fixture: ComponentFixture<BumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
