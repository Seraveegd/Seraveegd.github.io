import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperuniqueComponent } from './superunique.component';

describe('SuperuniqueComponent', () => {
  let component: SuperuniqueComponent;
  let fixture: ComponentFixture<SuperuniqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperuniqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperuniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
