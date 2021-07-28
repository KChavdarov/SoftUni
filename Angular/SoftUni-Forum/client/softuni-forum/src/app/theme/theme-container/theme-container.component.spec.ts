import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeContainerComponent } from './theme-container.component';

describe('ThemeContainerComponent', () => {
  let component: ThemeContainerComponent;
  let fixture: ComponentFixture<ThemeContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemeContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
