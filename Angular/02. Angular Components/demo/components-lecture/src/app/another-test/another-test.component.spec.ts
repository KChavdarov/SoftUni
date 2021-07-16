import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherTestComponent } from './another-test.component';

describe('AnotherTestComponent', () => {
  let component: AnotherTestComponent;
  let fixture: ComponentFixture<AnotherTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnotherTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnotherTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
