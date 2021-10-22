import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniqueComponent } from './unique.component';

describe('UniqueComponent', () => {
  let component: UniqueComponent;
  let fixture: ComponentFixture<UniqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
