import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectristyDataComponent } from './electristy-data.component';

describe('ElectristyDataComponent', () => {
  let component: ElectristyDataComponent;
  let fixture: ComponentFixture<ElectristyDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectristyDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectristyDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
