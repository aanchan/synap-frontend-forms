import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhqComponent } from './phq.component';

describe('PhqComponent', () => {
  let component: PhqComponent;
  let fixture: ComponentFixture<PhqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
