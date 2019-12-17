import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordbuttonComponent } from './recordbutton.component';

describe('RecordbuttonComponent', () => {
  let component: RecordbuttonComponent;
  let fixture: ComponentFixture<RecordbuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordbuttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
