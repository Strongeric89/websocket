import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsynchronouslyInitialisedComponent } from './asynchronously-initialised.component';

describe('AsynchronouslyInitialisedComponent', () => {
  let component: AsynchronouslyInitialisedComponent;
  let fixture: ComponentFixture<AsynchronouslyInitialisedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsynchronouslyInitialisedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsynchronouslyInitialisedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
