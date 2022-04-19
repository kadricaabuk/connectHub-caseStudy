import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyResultBoardComponent } from './key-result-board.component';

describe('KeyResultBoardComponent', () => {
  let component: KeyResultBoardComponent;
  let fixture: ComponentFixture<KeyResultBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyResultBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyResultBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
