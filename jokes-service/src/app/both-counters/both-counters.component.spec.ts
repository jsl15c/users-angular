import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BothCountersComponent } from './both-counters.component';

describe('BothCountersComponent', () => {
  let component: BothCountersComponent;
  let fixture: ComponentFixture<BothCountersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BothCountersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BothCountersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
