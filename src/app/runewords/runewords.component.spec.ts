import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunewordsComponent } from './runewords.component';

describe('RunewordsComponent', () => {
  let component: RunewordsComponent;
  let fixture: ComponentFixture<RunewordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RunewordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RunewordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
