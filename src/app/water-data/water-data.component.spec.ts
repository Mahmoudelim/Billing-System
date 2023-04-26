import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterDataComponent } from './water-data.component';

describe('WaterDataComponent', () => {
  let component: WaterDataComponent;
  let fixture: ComponentFixture<WaterDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaterDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaterDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
