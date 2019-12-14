import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmbuttonComponent } from './armbutton.component';

describe('ArmbuttonComponent', () => {
  let component: ArmbuttonComponent;
  let fixture: ComponentFixture<ArmbuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArmbuttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
