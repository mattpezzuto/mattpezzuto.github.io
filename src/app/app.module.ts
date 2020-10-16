import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TavernAppComponent } from './tavern-app/tavern-app.component';
import { TitleScreenAppComponent } from './title-screen-app/title-screen-app.component';

import { CountdownTimerModule } from 'angular-countdown-timer';
import { BattleScreenComponent } from './battle-screen/battle-screen.component';
import { ScoreScreenComponent } from './score-screen/score-screen.component';


@NgModule({
  declarations: [
    AppComponent,
    TavernAppComponent,
    TitleScreenAppComponent,
    BattleScreenComponent,
    ScoreScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CountdownTimerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
