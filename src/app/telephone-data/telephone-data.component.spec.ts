import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelephoneDataComponent } from './telephone-data.component';

describe('TelephoneDataComponent', () => {
  let component: TelephoneDataComponent;
  let fixture: ComponentFixture<TelephoneDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelephoneDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelephoneDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
