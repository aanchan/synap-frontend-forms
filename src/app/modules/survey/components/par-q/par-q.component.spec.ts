import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParQComponent } from './par-q.component';

describe('ParQComponent', () => {
  let component: ParQComponent;
  let fixture: ComponentFixture<ParQComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParQComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
