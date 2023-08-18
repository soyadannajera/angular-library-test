import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiltFlowLibComponent } from './silt-flow-lib.component';

describe('SiltFlowLibComponent', () => {
  let component: SiltFlowLibComponent;
  let fixture: ComponentFixture<SiltFlowLibComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SiltFlowLibComponent]
    });
    fixture = TestBed.createComponent(SiltFlowLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
