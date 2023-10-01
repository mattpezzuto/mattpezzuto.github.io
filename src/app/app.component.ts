import { Component } from '@angular/core';
import { Player } from './player.model';
import {GameState} from './gameState.model';
import { CreaturePool } from './creaturePool.model';
import { Creature, CreatureType } from './creature';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  gameState;
  title = 'gog';
  name = '';
  log = '';
  textValue = 'initial value';

  ngOnInit() {
    let playerList: Player[] = [];
    let player = new Player("matt", false);


    playerList.push(player);

    // Generate Computer Players
    for (var i = 1; i < 8; i++) {
      var playerName: string = "Player" + i;
      let compPlayer = new Player(playerName, true);      
      playerList.push(compPlayer);
    }
    
    var emptyCreaturePool: CreaturePool = new CreaturePool;
    this.gameState = new GameState(0, 1, playerList, emptyCreaturePool);
    this.createInitialCreaturePool();
    this.gameState.playerList = playerList;
    this.gameState.turn = 1;
    this.gameState.stage = 1;
  }

  logText(value: string): void {
    this.log += `Text changed to '${value}'\n`;
  }

  logCheckbox(element: HTMLInputElement): void {
    this.log += `Checkbox ${element.value} was ${element.checked ? '' : 'un'}checked\n`;
  }


  createInitialCreaturePool(): Creature[] {
    let creatureList: Creature[] = [];
    this.gameState.creaturePool.addCreatureToPool(3, CreatureType.Gnome);
    this.gameState.creaturePool.addCreatureToPool(3, CreatureType.Goblin);
    this.gameState.creaturePool.addCreatureToPool(3, CreatureType.Kobold);
    this.gameState.creaturePool.addCreatureToPool(3, CreatureType.Dwarf);
    this.gameState.creaturePool.addCreatureToPool(3, CreatureType.SkeletonWarrior);
    this.gameState.creaturePool.addCreatureToPool(3, CreatureType.Orc);
    this.gameState.creaturePool.addCreatureToPool(8, CreatureType.InfestedRat);
    this.gameState.creaturePool.addCreatureToPool(3, CreatureType.FrostGiant);

    this.gameState.creaturePool.addCreatureToPool(3, CreatureType.TreeOfLife);
    this.gameState.creaturePool.addCreatureToPool(3, CreatureType.Wizard);
    this.gameState.creaturePool.addCreatureToPool(3, CreatureType.Necromancer);
    this.gameState.creaturePool.addCreatureToPool(3, CreatureType.Archer);
    this.gameState.creaturePool.addCreatureToPool(3, CreatureType.Bard);
    this.gameState.creaturePool.addCreatureToPool(3, CreatureType.TrojanHorse);

    this.gameState.creaturePool.addCreatureToPool(1, CreatureType.Genie);
    this.gameState.creaturePool.addCreatureToPool(1, CreatureType.Sorcerous);

    return creatureList;
  }



}
