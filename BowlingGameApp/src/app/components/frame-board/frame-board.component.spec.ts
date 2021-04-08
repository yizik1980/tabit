import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameBoardComponent } from './frame-board.component';

describe('FrameBoardComponent', () => {
  let component: FrameBoardComponent;
  let fixture: ComponentFixture<FrameBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrameBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
