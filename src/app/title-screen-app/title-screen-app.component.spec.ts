import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleScreenAppComponent } from './title-screen-app.component';

describe('TitleScreenAppComponent', () => {
  let component: TitleScreenAppComponent;
  let fixture: ComponentFixture<TitleScreenAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleScreenAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleScreenAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
