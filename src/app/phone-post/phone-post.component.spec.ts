import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonePostComponent } from './phone-post.component';

describe('PhonePostComponent', () => {
  let component: PhonePostComponent;
  let fixture: ComponentFixture<PhonePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhonePostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhonePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
