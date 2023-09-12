import { Component, OnInit, Input } from '@angular/core';
import { GameState } from '../gameState.model';
import { CreatureType, Creature} from '../creature';
import { TavernCreature } from '../TavernCreature';
import { Observable, timer } from 'rxjs';
import { takeWhile, map } from 'rxjs/operators';
import { EMPTY_SOURCE_SPAN } from '@angular/compiler';


@Component({
  selector: 'app-tavern-app',
  templateUrl: './tavern-app.component.html',
  styleUrls: ['./tavern-app.component.css']
})


export class TavernAppComponent implements OnInit {

  @Input() localGameState: GameState;

  counter$: Observable<number>;
  counter = 15;
  refreshCounter = 0;

  tavernCreatureList : TavernCreature[];
  
  constructor() {
    console.log('in tavern consturctor');

    this.tavernCreatureList = [];

    // timer(1000,1000).pipe(
    //   takeWhile( () => this.counter > -1 ),
    //   map(() => this.counter--)
    //   // map((x) => {
    //   //   if (this.count === 0) { 
    //   //     this.localGameState.stage=3; 
    //   //   }})
    // ).subscribe( () => {
    //   if (this.counter === -1) {
    //     this.localGameState.stage = 3;
    //     // Update other players
    //     for (var i = 1; i < this.localGameState.playerList.length; i++ ) {
    //       let slot = this.getRandomSlot(1);
    //       this.localGameState.playerList[i].creatureList.push(this.localGameState.creaturePool.tier1[slot]);
    //     }
    //   }
    // })

   }

  ngOnInit() {
    // Grab 3 creatures from the pool that will be for sale
    console.log('in ngOnInit');
    this.refreshCounter = this.localGameState.playerList[0].refreshCounter;

    this.refreshTavernBoard();
    this.localGameState.playerList[0].gold += 100;
  }

  onRefresh() {
    if (this.refreshCounter > 0) {
      this.refreshCounter--;
      this.refreshTavernBoard();
    }
  }

  onSell(slot: number) {
    if (this.localGameState.playerList[0].creatureList.length > slot) {
      var tempCreature : Creature = this.localGameState.playerList[0].creatureList[slot].getCopy();
      this.localGameState.playerList[0].creatureList.splice(slot, 1);
      this.localGameState.creaturePool.addCreatureToPool(1, tempCreature.createType);
      this.localGameState.playerList[0].gold += 50;

    }

  }

  onMoveRight(slot: number) {
    var rightSlot: number = slot + 1;
    console.log('slot = ' + slot + ', rightSlot = ' + rightSlot);
    if (this.localGameState.playerList[0].creatureList.length > rightSlot) {
      var tempCreature: Creature = this.localGameState.playerList[0].creatureList[slot];
      this.localGameState.playerList[0].creatureList[slot] = this.localGameState.playerList[0].creatureList[rightSlot];
      this.localGameState.playerList[0].creatureList[rightSlot] = tempCreature;
    }
  }

  getTavernCreature(index:number) {
    return this.tavernCreatureList[index];
  }

  getPlayersBoard(index: number) {
    if (this.localGameState.playerList[0].creatureList.length > 0) {
      return this.localGameState.playerList[0].creatureList[index];
    } 
    
    return  new Creature(CreatureType.Empty);
  }

  refreshTavernBoard() {
    this.tavernCreatureList = [];
    var tempCreature: TavernCreature;
    var randomList: number[] = [];
    var done: boolean = false;
    var count: number = 0;

    while (done === false) {
      for(var i = 1; i <= 3; i++){
        randomList.push(this.getRandomSlot(1));
      }
      if (randomList[0] != randomList[1] && randomList[1] != randomList[2]) {
        done = true;
      }
      count++;
      if (count > 100) {
        done = true;    // prevent infinite loop
      }
  
    }

    for(var i = 1; i <= 3; i++){
      let poolSlot = this.getRandomSlot(1);
      tempCreature = new TavernCreature(i, this.localGameState.creaturePool.tier1[poolSlot], poolSlot);
      this.tavernCreatureList.push(tempCreature);
    }

  }

  onBuy(slot: number) {
    if (this.localGameState.playerList[0].gold >= 100) {
      this.localGameState.playerList[0].gold -= 100;
      this.doPurchase(slot);
    }
  }

  onNext() {
    for (var i = 1; i < this.localGameState.playerList.length; i++ ) {
        if (this.localGameState.playerList[i].creatureList.length < 8) {
          let slot = this.getRandomSlot(1);
          this.localGameState.playerList[i].creatureList.push(this.localGameState.creaturePool.tier1[slot]);
        }
        }
    this.localGameState.stage++;
  }

  doPurchase(slot: number) {

    this.tavernCreatureList[slot].sold = true;
    this.localGameState.creaturePool.removeCreatureFromPool(this.tavernCreatureList[slot].poolSlot);
    console.log("tavern sold slot " + slot);
    console.log("pool  sold slot " + this.tavernCreatureList[slot].poolSlot);
    console.log(this.tavernCreatureList[slot].sold);

    if (this.tavernCreatureList[slot].creature.getName() === 'Demon Portal') {
      console.log('adding 3 demons');
      this.localGameState.creaturePool.addCreatureToPool(3, CreatureType.Demon);
      // this.localGameState.playerList[0].creatureList.push(new Creature('Imp', 2, 2, 'blank.jpg'));
    } else if (this.tavernCreatureList[slot].creature.getName() === 'Dragon Egg') {
        this.localGameState.creaturePool.addCreatureToPool(3, CreatureType.Dragon);
        // this.localGameState.playerList[0].creatureList.push(new Creature(CreatureType.Dragon);
    } else if (this.tavernCreatureList[slot].creature.getName() === 'Bard') {
      this.localGameState.playerList[0].creatureList.push(this.tavernCreatureList[slot].creature);
      this.localGameState.playerList[0].refreshCounter++;
    } else {
      this.localGameState.playerList[0].creatureList.push(this.tavernCreatureList[slot].creature);
    }

    
    // Print Player List
    for(var i = 0; i<this.localGameState.playerList[0].creatureList.length; i++) {
      console.log(this.localGameState.playerList[0].creatureList[i].getName());
    }

  }

  triggerFunction() {
    console.log('Timer Ended');
  }

  getRandomSlot(tier: number) : number {
    var size = 0;
    if (tier === 1) {
      size = this.localGameState.creaturePool.tier1.length;
    }
    return Math.floor((Math.random() * size) + 0);
  }

  // getRandomCreature(tier: number) : Creature {

  //   var creature: Creature = this.localGameState.creaturePool.tier1[slot];
  //   return creature;

  // }


}
