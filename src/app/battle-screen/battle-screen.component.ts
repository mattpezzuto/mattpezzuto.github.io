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

      if (creatureListTeam1.length === 0 || creatureListTeam2.length === 0) {
        done = true;
      }

      var isTurnTeam1 = this.doesTeamOneGoFirst(creatureListTeam1, creatureListTeam2); 
      
      var loopTimeOutCounter = 0;
      while (!done) {
        loopTimeOutCounter++;
        if (loopTimeOutCounter > 1000) {
          done = true;
        }

        console.log('in loop' + matchIndex + ', isTurnTeam1 = ' + isTurnTeam1);

        if (isTurnTeam1) {
          this.performAttack(creatureListTeam1, creatureListTeam2, this.localGameState.playerList[slotTeam1].name, this.localGameState.playerList[slotTeam2].name);
        } else {
          this.performAttack(creatureListTeam2, creatureListTeam1, this.localGameState.playerList[slotTeam2].name, this.localGameState.playerList[slotTeam1].name);
        }
        isTurnTeam1 = !isTurnTeam1;

        if (creatureListTeam1[0].currentLife < 1 && creatureListTeam2[0].currentLife < 1) {
          this.battleLogs.push(
            "..." + creatureListTeam1[0].name + " & " + creatureListTeam2[0].name + " die"
          );
          creatureListTeam1.splice(0, 1);
          creatureListTeam2.splice(0,1);
        } else {
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

  performAttack(creatureListAttack: Creature[], creatureListDefender: Creature[], attackPlayerName: string, defendPlayerName: string) {
              // defensive layer 1
              var dodgedDefenderTeam: boolean = this.doesDefenderDodge(creatureListDefender[0].dex);
              var dodgedAttackTeam: boolean = this.doesDefenderDodge(creatureListAttack[0].dex);
    
              this.battleLogs.push(
                creatureListAttack[0].name + "(" + attackPlayerName + ") + attacks " + creatureListDefender[0].name + "(" + defendPlayerName + ")"
              );
              
              if (!dodgedAttackTeam) {
                var dmg = this.getDamageAfterArmorCheck(creatureListDefender, creatureListAttack);
                creatureListAttack[0].currentLife = creatureListAttack[0].currentLife - dmg;  // strong attack
                this.battleLogs.push("... " + creatureListDefender[0].name + " deals " + dmg + " damage.");

              } else {
                this.battleLogs.push("... " + creatureListAttack[0].name + " dodges attack.");
              }
              
              if (!dodgedDefenderTeam) {
                var dmg = this.getDamageAfterArmorCheck(creatureListAttack, creatureListDefender);
                creatureListDefender[0].currentLife = creatureListDefender[0].currentLife - dmg;  // counter attack
                this.battleLogs.push("... " + creatureListAttack[0].name + " deals " + dmg + " damage.");
              } else {
                this.battleLogs.push("... " + creatureListDefender[0].name + " dodges attack.");

              }
              

    
  }

  getDamageAfterArmorCheck(attackerTeam: Creature[], defenderTeam: Creature[]): number {
    var dmg = attackerTeam[0].attack;
    if (defenderTeam[0].currentArmor > 0) {
      dmg = Math.max(dmg - defenderTeam[0].currentArmor, 0);
      defenderTeam[0].currentArmor--;
    }
    console.log('Reduced ' + (attackerTeam[0].attack - dmg) + ' damage');
    return dmg;
  }

  doesDefenderDodge(dex: number): boolean {
    var dodged: boolean = false;
    if (Math.floor(Math.random() * 8000 + 1) < dex * dex * dex) {       // 20^3 dex^3 max = 72%
      dodged = true;
    }
    return dodged;
  }

  doesTeamOneGoFirst(creatureListTeam1: Creature[], creatureListTeam2: Creature[]) : boolean {
    var isTurnTeam1 = true;
    if (creatureListTeam1.length == creatureListTeam2.length) {
      var flip = Math.floor((Math.random() * 2));

      console.log ('flip = ' + flip);
      if (flip == 0) {
        isTurnTeam1 = false;
      }
    }
    else if (creatureListTeam2.length > creatureListTeam1.length) {
      isTurnTeam1 = false;
    }
    return isTurnTeam1;
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
