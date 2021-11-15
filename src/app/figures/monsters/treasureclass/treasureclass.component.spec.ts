import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreasureclassComponent } from './treasureclass.component';

describe('TreasureclassComponent', () => {
  let component: TreasureclassComponent;
  let fixture: ComponentFixture<TreasureclassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreasureclassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreasureclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
