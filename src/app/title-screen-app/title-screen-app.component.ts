import { Component, OnInit, Input } from '@angular/core';
import { GameState } from '../gameState.model';


@Component({
  selector: 'app-title-screen-app',
  templateUrl: './title-screen-app.component.html',
  styleUrls: ['./title-screen-app.component.css']
})
export class TitleScreenAppComponent implements OnInit {

  @Input() localGameState: GameState;

  constructor() { }

  ngOnInit() {
  }

  onStartGame() {
    this.localGameState.stage  = 2;
  }

}
