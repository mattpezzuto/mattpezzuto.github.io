import { Component, OnInit, Input } from '@angular/core';
import { GameState } from '../gameState.model';

import { Player } from '../player.model';


@Component({
  selector: 'app-score-screen',
  templateUrl: './score-screen.component.html',
  styleUrls: ['./score-screen.component.css']
})
export class ScoreScreenComponent implements OnInit {
  @Input() localGameState: GameState;

  sortedPlayerList: Player[] = [];

  constructor() { }

  ngOnInit() {
    let currentPlayerList : Player[] = [];
    for(var i=0; i<this.localGameState.playerList.length; i++) {
      currentPlayerList.push(this.localGameState.playerList[i])
    }
    this.sortedPlayerList = currentPlayerList.sort((a,b) => b.life - a.life);

    console.log('players creature list length = ' + this.localGameState.playerList[0].creatureList.length);
    // Print Player List
    for(var i = 0; i<this.localGameState.playerList[0].creatureList.length; i++) {
      console.log(this.localGameState.playerList[0].creatureList[i].name);
    }
  }

  onNext() {
    this.localGameState.stage = 2;
  }

}
