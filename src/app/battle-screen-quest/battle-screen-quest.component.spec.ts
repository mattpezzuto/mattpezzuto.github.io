import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BattleScreenQuestComponent } from './battle-screen-quest.component';

describe('BattleScreenQuestComponent', () => {
  let component: BattleScreenQuestComponent;
  let fixture: ComponentFixture<BattleScreenQuestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BattleScreenQuestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BattleScreenQuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
