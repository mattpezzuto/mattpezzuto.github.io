import { Component, OnInit, Input } from '@angular/core';
import { GameState } from '../gameState.model';
import { Creature} from '../creature';
import { TavernCreature } from '../TavernCreature';
import { Observable, timer } from 'rxjs';
import { takeWhile, map } from 'rxjs/operators';


@Component({
  selector: 'app-tavern-app',
  templateUrl: './tavern-app.component.html',
  styleUrls: ['./tavern-app.component.css']
})


export class TavernAppComponent implements OnInit {

  @Input() localGameState: GameState;

  counter$: Observable<number>;
  counter = 5;


  tavernCreatureList : TavernCreature[];
  
  constructor() {
    this.tavernCreatureList = [];

    timer(1000,1000).pipe(
      takeWhile( () => this.counter > -1 ),
      map(() => this.counter--)
      // map((x) => {
      //   if (this.count === 0) { 
      //     this.localGameState.stage=3; 
      //   }})
    ).subscribe( () => {
      if (this.counter === -1) {
        this.localGameState.stage = 3;
        // Update other players
        for (var i = 1; i < this.localGameState.playerList.length; i++ ) {
          console.log ('i=' + i);
          let slot = this.getRandomSlot(1);
          this.localGameState.playerList[i].creatureList.push(this.localGameState.creaturePool.tier1[slot]);
          this.removeCreatureFromPool(slot);
        }
      }
    })

   }

  ngOnInit() {
    // Grab 3 creatures from the pool that will be for sale
    this.refreshTavernBoard();
    this.localGameState.playerList[0].gold += 100;
  }

  onRefresh() {
    this.refreshTavernBoard();
  }

  refreshTavernBoard() {
    this.tavernCreatureList = [];
    var tempCreature: TavernCreature;
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

  doPurchase(slot: number) {
    this.localGameState.playerList[0].creatureList.push(this.tavernCreatureList[slot].creature);
    // Print Player List
    for(var i = 0; i<this.localGameState.playerList[0].creatureList.length; i++) {
      console.log(this.localGameState.playerList[0].creatureList[i].name);
    }
    this.tavernCreatureList[slot].sold = true;
    this.removeCreatureFromPool(this.tavernCreatureList[slot].poolSlot);
    console.log("tavern sold slot " + slot);
    console.log("pool  sold slot " + this.tavernCreatureList[slot].poolSlot);
    console.log(this.tavernCreatureList[slot].sold);

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

  removeCreatureFromPool(index){
    console.log('before:' + this.localGameState.creaturePool.tier1.length);
    this.localGameState.creaturePool.tier1.splice(index, 1);
    console.log('after:' + this.localGameState.creaturePool.tier1.length);
  }

}
