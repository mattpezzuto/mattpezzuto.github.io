import { Component, OnInit, Input } from '@angular/core';
import { GameState } from '../gameState.model';
import { Creature } from '../creature';


@Component({
  selector: 'app-battle-screen',
  templateUrl: './battle-screen.component.html',
  styleUrls: ['./battle-screen.component.css']
})
export class BattleScreenComponent implements OnInit {

  @Input() localGameState: GameState;

  battleLogs: String[];

  constructor() { }

  ngOnInit() {
    this.battleLogs = [];

    let playerIndexList: number[] = [];
    for (var i : number = 0; i < 8; i++) {
      playerIndexList.push(i);
    }
    let randomPlayerList = this.shuffle(playerIndexList);
    console.log('randomPlayerList: ' + randomPlayerList);

    // Perform Matches
    for (var matchIndex = 0; matchIndex < 4; matchIndex++) {
      var creatureListTeam1: Creature[] = [];
      var creatureListTeam2: Creature[] = [];

      const slotTeam1:number = randomPlayerList[0 + matchIndex*2];
      const slotTeam2:number = randomPlayerList[1 + matchIndex*2];

      console.log('slotTeam1=' + slotTeam1 + ' playerList[slotTeam1].name=' + this.localGameState.playerList[slotTeam1].name);
      console.log('slotTeam2=' + slotTeam2 + ' playerList[slotTeam2].name=' + this.localGameState.playerList[slotTeam2].name);

      console.log(this.localGameState.playerList[slotTeam1].creatureList[0].getCurrentSpeed());
      
      // For some reason val=>Object.get creates a copy, but doesn't copy the methods that go along with the class
      this.localGameState.playerList[slotTeam1].creatureList.forEach(val => creatureListTeam1.push(val.getCopy()));
      this.localGameState.playerList[slotTeam2].creatureList.forEach(val => creatureListTeam2.push(val.getCopy()));
      
      var done: boolean = false;

      this.battleLogs.push(
        this.localGameState.playerList[slotTeam1].name + "(" + this.localGameState.playerList[slotTeam1].creatureList.length + ")  vs. " 
        + this.localGameState.playerList[slotTeam2].name + "(" + this.localGameState.playerList[slotTeam2].creatureList.length + ")"
      );

      for (var i1 = 0; i1< creatureListTeam1.length; i1++) {
        creatureListTeam1[i1].preCombat();
      }

      for (var i2 = 0; i2< creatureListTeam2.length; i2++) {
        creatureListTeam2[i2].preCombat();
      }
      console.log('here' + matchIndex);

      if (creatureListTeam1.length === 0 || creatureListTeam2.length === 0) {
        done = true;
      }

      while (!done) {

        console.log('in loop' + matchIndex);


        for (var i = 0; i< creatureListTeam1.length; i++) {
          creatureListTeam1[i].incrementSpeed();
        }
        for (var i = 0; i< creatureListTeam2.length; i++) {
          creatureListTeam2[i].incrementSpeed();
        }

        creatureListTeam1.sort((a,b) => b.speed - a.speed);
        creatureListTeam2.sort((a,b) => b.speed - a.speed);

        // Find fastest player
        if (creatureListTeam1[0].speed > creatureListTeam2[0].speed) {
          creatureListTeam2[0].currentLife = creatureListTeam2[0].currentLife - creatureListTeam1[0].attack * 2;  // strong attack
          creatureListTeam1[0].currentLife = creatureListTeam1[0].currentLife - creatureListTeam2[0].attack * 1;  // counter attack
          // creatureListTeam1[0].currentSpeed = 0;
          this.battleLogs.push(
            creatureListTeam1[0].name + "(1)" + " attacks " + creatureListTeam2[0].name + "(2)"
          );
        } else {
          creatureListTeam1[0].currentLife = creatureListTeam1[0].currentLife - creatureListTeam2[0].attack * 2;  // strong attack
          creatureListTeam2[0].currentLife = creatureListTeam2[0].currentLife - creatureListTeam1[0].attack * 1;  // counter attack
          // creatureListTeam2[0].currentSpeed = 0;
          this.battleLogs.push(
            creatureListTeam2[0].name + "(2)" + " attacks " + creatureListTeam1[0].name + "(1)"
          );
        }

        if (creatureListTeam1[0].currentLife < 1) {
          this.battleLogs.push(
            "..." + creatureListTeam1[0].name + " (1) dies"
          );
          creatureListTeam1.splice(0, 1);
        }

        if (creatureListTeam2[0].currentLife < 1) {
          this.battleLogs.push(
            "..." + creatureListTeam2[0].name + " (2) dies"
          );
          creatureListTeam2.splice(0,1);
        }

        if (creatureListTeam1.length === 0 || creatureListTeam2.length === 0 ) {
          done = true;
        }
      }

      var winner:number = -1;  // assume tie
      if (creatureListTeam1.length === 0 && creatureListTeam2.length > 0 ) {
        winner = 1;
      } else if (creatureListTeam1.length > 0 && creatureListTeam2.length === 0 ) {
        winner = 0;
      }


      var slotLoser:number;
      var slotWinner:number

      if (winner === 0 ) {
        slotLoser = slotTeam2;
        slotWinner = slotTeam1;
        this.battleLogs.push(
          this.localGameState.playerList[slotWinner].name + " (1)" + " beats " + this.localGameState.playerList[slotLoser].name + "."
        );
      --this.localGameState.playerList[slotLoser].life;
      } else if (winner === 1) {
          slotLoser = slotTeam1;
          slotWinner = slotTeam2;
          this.battleLogs.push(
            this.localGameState.playerList[slotWinner].name + " (2)" +  " beats " + this.localGameState.playerList[slotLoser].name + "."
          );
        --this.localGameState.playerList[slotLoser].life;
      } else {
        this.battleLogs.push(
          this.localGameState.playerList[slotTeam1].name + " ties with " + this.localGameState.playerList[slotTeam2].name + "."
        )
      }

    }
  }


  shuffle(list) {
    return list.reduce((p, n) => {
      const size = p.length;
      const index = Math.trunc(Math.random() * (size - 1));
      p.splice(index, 0, n);
      return p;
    }, []);
  };

  onNext() {
    ++this.localGameState.stage;
  }

}
