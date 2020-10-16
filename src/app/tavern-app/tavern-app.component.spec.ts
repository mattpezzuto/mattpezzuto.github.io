import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TavernAppComponent } from './tavern-app.component';

describe('TavernAppComponent', () => {
  let component: TavernAppComponent;
  let fixture: ComponentFixture<TavernAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TavernAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TavernAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
