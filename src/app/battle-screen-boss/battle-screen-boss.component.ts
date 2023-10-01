import { Component, OnInit, Input } from '@angular/core';
import { GameState } from '../gameState.model';
import { Battle } from '../battle';
import { Player } from '../player.model';
import { Creature, CreatureType } from '../creature';


@Component({
  selector: 'app-battle-screen-boss',
  templateUrl: './battle-screen-boss.component.html',
  styleUrls: ['./battle-screen-boss.component.css']
})
export class BattleScreenBossComponent implements OnInit {

  @Input() localGameState: GameState;

  battleLogs: String[] = [];
  battleLogsDetail: String[] = [];
  battleLogsResult: String[] = [];
  logsToggle: boolean = true;
  titleLog: String;

  constructor() { }

  ngOnInit() {
    this.battleLogs = [];
    this.battleLogsResult = [];
    this.battleLogsDetail = [];

    let playerIndexList: number[] = [];
    for (var i : number = 1; i < 8; i++) {
      playerIndexList.push(i);
    }
    let randomPlayerList = this.shuffle(playerIndexList);
    randomPlayerList.push(0);
    console.log('randomPlayerList: ' + randomPlayerList);

    // Perform Matches
    for (var playerIndex = this.localGameState.playerList.length - 1; playerIndex >= 0; playerIndex--) {
      this.titleLog = "";
      this.battleLogs = [];

      var boss : Player = new Player("Boss", true);
      boss.creatureList.push(new Creature(CreatureType.CarrionCrawler));

      // console.log('slotTeam2=' + slotTeam2 + ' playerList[slotTeam2].name=' + this.localGameState.playerList[slotTeam2].name);

      var battle: Battle = new Battle(this.localGameState.playerList[playerIndex], boss, this.localGameState.creaturePool.getCreaturePool());

      battle.performBattle();
      var winner = battle.getWinner();
      this.battleLogsDetail = battle.getBattleLogs();
      var dmgDone1 = battle.getDamageDone(0);
      var dmgDone2 = battle.getDamageDone(1);

      console.log('dmgDones = ' + dmgDone1 + ', ' + dmgDone2);

      this.localGameState.playerList[playerIndex].incrementDmgDone(dmgDone1);
      this.battleLogsResult.splice(0, this.battleLogsResult.length);  // clear

      if (winner === 0) {
        this.battleLogsResult.push(
          this.localGameState.playerList[playerIndex].name + " (1)" + " beats " + boss.name + "."
        );
        this.localGameState.playerList[playerIndex].gold += 100;
      } else if (winner === 1) {
        this.battleLogsResult.push(
          boss.name + " (2)" +  " beats " + this.localGameState.playerList[playerIndex].name + "."
        );
      } else {
        this.battleLogsResult.push(
          this.localGameState.playerList[playerIndex].name + " ties with " + boss.name + "."
        );
      }
      
      this.battleLogs = this.battleLogsResult;

      // var slotLoser:number;
      // var slotWinner:number

      // if (winner === 0 ) {
      //   slotLoser = slotTeam2;
      //   slotWinner = slotTeam1;
      //   this.localGameState.playerList[slotWinner].incrementWins();
      //   this.localGameState.playerList[slotLoser].incrementLoses();
      //   this.battleLogs.push(
      //     this.localGameState.playerList[slotWinner].name + " (1)" + " beats " + this.localGameState.playerList[slotLoser].name + "."
      //   );
      // --this.localGameState.playerList[slotLoser].life;
      // } else if (winner === 1) {
      //     slotLoser = slotTeam1;
      //     slotWinner = slotTeam2;
      //     this.localGameState.playerList[slotWinner].incrementWins();
      //     this.localGameState.playerList[slotLoser].incrementLoses();
      //     this.battleLogs.push(
      //       this.localGameState.playerList[slotWinner].name + " (2)" +  " beats " + this.localGameState.playerList[slotLoser].name + "."
      //     );
      //   --this.localGameState.playerList[slotLoser].life;
      // } else {
      //   this.localGameState.playerList[slotTeam1].incrementTies();
      //   this.localGameState.playerList[slotTeam2].incrementTies();
      //   this.battleLogs.push(
      //     this.localGameState.playerList[slotTeam1].name + " ties with " + this.localGameState.playerList[slotTeam2].name + "."
      //   );
      // }
      
    }
  }
  
  shuffle <T>(array: T[]): T[] {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
};

onToggleBattleLog() {
  if (this.logsToggle) {
    this.battleLogs = this.battleLogsDetail;
  } else {
    this.battleLogs = this.battleLogsResult;
  }
  this.logsToggle = !this.logsToggle;
}

onNext() {
    ++this.localGameState.stage;
  }

}
