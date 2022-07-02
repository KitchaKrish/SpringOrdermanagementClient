import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorcmpComponent } from './errorcmp.component';

describe('ErrorcmpComponent', () => {
  let component: ErrorcmpComponent;
  let fixture: ComponentFixture<ErrorcmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorcmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorcmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
