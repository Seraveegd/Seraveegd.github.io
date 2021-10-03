import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffixesComponent } from './affixes.component';

describe('AffixesComponent', () => {
  let component: AffixesComponent;
  let fixture: ComponentFixture<AffixesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffixesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffixesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
