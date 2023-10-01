import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TavernAppComponent } from './tavern-app/tavern-app.component';
import { TitleScreenAppComponent } from './title-screen-app/title-screen-app.component';

import { BattleScreenComponent } from './battle-screen/battle-screen.component';
import { BattleScreenBossComponent } from './battle-screen-boss/battle-screen-boss.component';
import { BattleScreenQuestComponent } from './battle-screen-quest/battle-screen-quest.component';
import { ScoreScreenComponent } from './score-screen/score-screen.component';
import { SelectQuestComponent } from './select-quest/select-quest.component';


@NgModule({
  declarations: [
    AppComponent,
    TavernAppComponent,
    TitleScreenAppComponent,
    BattleScreenComponent,
    BattleScreenBossComponent,
    BattleScreenQuestComponent,
    SelectQuestComponent,
    ScoreScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
