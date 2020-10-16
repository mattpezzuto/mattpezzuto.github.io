import { Component } from '@angular/core';
import { Player } from './player.model';
import {GameState} from './gameState.model';
import { CreaturePool } from './creaturePool.model';
import { Creature } from './creature';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  gameState = new GameState();
  title = 'gog';
  name = '';
  log = '';
  textValue = 'initial value';

  ngOnInit() {
    this.gameState = new GameState();
    let playerList: Player[] = [];
    let player = new Player();
    player.name = "matt";
    player.life = 40;
    player.gold = 100;
    player.computerControlled = false;
    player.creatureList = [];

    playerList.push(player);

    // Generate Computer Players
    for (var i = 1; i < 8; i++) {
      let compPlayer = new Player();
      compPlayer.name = "Player" + i;
      compPlayer.life = 40;
      compPlayer.gold = 100;
      compPlayer.computerControlled = true;
      compPlayer.creatureList = [];
      playerList.push(compPlayer);
    }

    this.gameState.creaturePool = new CreaturePool(this.getCreatureManual());
    this.gameState.playerList = playerList;
    this.gameState.turn = 0;
    this.gameState.stage = 1;
  }

  logText(value: string): void {
    this.log += `Text changed to '${value}'\n`;
  }

  logCheckbox(element: HTMLInputElement): void {
    this.log += `Checkbox ${element.value} was ${element.checked ? '' : 'un'}checked\n`;
  }

  getCreatureManual(): Creature[] {
    let creatureList: Creature[] = [];
    creatureList.push(new Creature('Gnome', 10, 5, 90, 'gnome.png'));
    creatureList.push(new Creature('Goblin', 10, 5, 95, 'black.jpg'));
    creatureList.push(new Creature('Dwarf', 20, 5, 80, 'black.jpg'));
    creatureList.push(new Creature('Skeleton', 10, 5, 80, 'skeleton.png'));
    creatureList.push(new Creature('Elf', 10, 5, 80, 'black.jpg'));
    creatureList.push(new Creature('Orc', 10, 10, 75, 'orc.jpg'));
    creatureList.push(new Creature('Paladin', 20, 5, 85, 'paladin.png'));
    creatureList.push(new Creature('Wizard', 10, 5, 70, 'black.jpg'));
    creatureList.push(new Creature('Necromancer', 20, 5, 70, 'black.jpg'));
    creatureList.push(new Creature('Archer', 10, 5, 90, 'black.jpg'));

    console.log('adsf = ' + creatureList[0].getCurrentSpeed());
    return creatureList;
  }



}
