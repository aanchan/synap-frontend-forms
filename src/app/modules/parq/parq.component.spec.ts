import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PARQComponent } from './parq.component';

describe('PARQComponent', () => {
  let component: PARQComponent;
  let fixture: ComponentFixture<PARQComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PARQComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PARQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
