import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchtoolsComponent } from './switchtools.component';

describe('SwitchtoolsComponent', () => {
  let component: SwitchtoolsComponent;
  let fixture: ComponentFixture<SwitchtoolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchtoolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchtoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
