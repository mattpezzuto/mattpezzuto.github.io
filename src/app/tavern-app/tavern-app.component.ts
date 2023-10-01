import { element } from 'protractor';
import { Component, OnInit, Input } from '@angular/core';
import { GameState } from '../gameState.model';
import { CreatureType, Creature} from '../creature';
import { TavernCreature } from '../TavernCreature';
import { Observable, timer } from 'rxjs';
import { takeWhile, map } from 'rxjs/operators';
import { EMPTY_SOURCE_SPAN, TemplateParseError } from '@angular/compiler';
import Utils from '../utils';
import { Gear } from '../gear';


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

  currentSelection: number = 0;

  tavernCreatureList : TavernCreature[];
  
  constructor() {

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
      var tempCreature : Creature = this.localGameState.playerList[0].creatureList[slot];
      if (tempCreature.getGear() !== null) {
        this.localGameState.playerList[0].addToGearList(tempCreature.getGear());
        console.log('here zzz = ');
      }
      this.localGameState.playerList[0].creatureList.splice(slot, 1);
      this.localGameState.creaturePool.addCreatureToPool(1, tempCreature.creatureType);
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

  isCreatureInSlot(index:number) : boolean {
    var result: boolean = false;
    if (this.localGameState.playerList[0].creatureList.length - 1 >= index) {
      result = true;
    } 
    return result;
  }

  getPlayersBoard(index: number) {
    if (this.localGameState.playerList[0].creatureList.length - 1 >= index) {
      return this.localGameState.playerList[0].creatureList[index];
    } 
    
    if (this.localGameState.playerList[0].creatureSlotsOpen[index]) {
      return  new Creature(CreatureType.Empty);
    } else {
      return new Creature(CreatureType.Locked);
    }
  }

  getIsSlotLocked(slot: number) {
    return !this.localGameState.playerList[0].creatureSlotsOpen[slot];
  }

  onUnlock(slot: number) {
    if (this.localGameState.playerList[0].gold >= 100) {
      this.localGameState.playerList[0].gold -= 100;
      this.localGameState.playerList[0].creatureSlotsOpen[slot] = true;
    }
  }

  onUpgradeRecruitment() {
    if (this.localGameState.playerList[0].gold >= 100) {
      this.localGameState.creaturePool.addCreatureToPool(1, Utils.upgradeRecruitment())
      this.localGameState.playerList[0].gold -= 100;
    }
  }

  getMaxPartySize(): number {
    var maxPartySize: number = 0;
    for (var i = 0; i < 6; i++) { 
      if (this.localGameState.playerList[0].creatureSlotsOpen[i]) {
        maxPartySize++;
      }
    }
    return maxPartySize;
  }

  isPartyFull() {
    var maxPartySize: number = this.getMaxPartySize();
    if (this.localGameState.playerList[0].creatureList.length >= maxPartySize) {
      return true;
    } else {
      return false;
    }
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

  onRecruit(slot: number) {
    if (this.localGameState.playerList[0].gold >= 100) {
      this.localGameState.playerList[0].gold -= 100;
      this.doPurchase(slot);
    }
  }

  onNext() {
    switch (this.localGameState.turn) {
      case 1: 
        this.localGameState.playerList[1].creatureList.push(new Creature(CreatureType.Orc)); 
        this.localGameState.playerList[2].creatureList.push(this.localGameState.creaturePool.tier1[this.getRandomSlot(1)]);
        break;
      case 2: 
        this.localGameState.playerList[1].creatureList.push(new Creature(CreatureType.Orc)); 
        this.localGameState.playerList[2].creatureList.push(this.localGameState.creaturePool.tier1[this.getRandomSlot(1)]);
        break;
      case 3: 
        this.localGameState.playerList[1].creatureList.push(new Creature(CreatureType.SkeletonWarrior));
        this.localGameState.playerList[2].creatureList.push(this.localGameState.creaturePool.tier1[this.getRandomSlot(1)]);
        break;
      case 4: 
        this.localGameState.playerList[1].creatureList.push(new Creature(CreatureType.Necromancer));
        this.localGameState.playerList[2].creatureList.push(this.localGameState.creaturePool.tier1[this.getRandomSlot(1)]);
      break;
      case 5:
        this.localGameState.playerList[1].creatureList.push(new Creature(CreatureType.Necromancer)); 
        this.localGameState.playerList[2].creatureList.push(this.localGameState.creaturePool.tier1[this.getRandomSlot(1)]);
      case 6:
        this.localGameState.playerList[1].creatureList.push(new Creature(CreatureType.SkeletonWarrior));
        this.localGameState.playerList[2].creatureList.push(this.localGameState.creaturePool.tier1[this.getRandomSlot(1)]);
        break;

      default:
        this.localGameState.playerList[1].creatureList.splice(0,this.localGameState.playerList[1].creatureList.length);  
        this.localGameState.playerList[1].creatureList.push(new Creature(CreatureType.TreeOfLife));
        this.localGameState.playerList[1].creatureList.push(new Creature(CreatureType.Mortiserion)); 
        this.localGameState.playerList[1].creatureList.push(new Creature(CreatureType.SkeletonWarrior)); 
        this.localGameState.playerList[1].creatureList.push(new Creature(CreatureType.SkeletonWarrior));
        this.localGameState.playerList[1].creatureList.push(new Creature(CreatureType.Necromancer)); 
        this.localGameState.playerList[1].creatureList.push(new Creature(CreatureType.Necromancer)); 

        this.localGameState.playerList[2].creatureList.splice(0,this.localGameState.playerList[2].creatureList.length);  
        this.localGameState.playerList[2].creatureList.push(new Creature(CreatureType.Bard));
        this.localGameState.playerList[2].creatureList.push(new Creature(CreatureType.Bard)); 
        this.localGameState.playerList[2].creatureList.push(new Creature(CreatureType.Elaron)); 
        this.localGameState.playerList[2].creatureList.push(new Creature(CreatureType.Wizard));
        this.localGameState.playerList[2].creatureList.push(new Creature(CreatureType.Wizard)); 
        this.localGameState.playerList[2].creatureList.push(new Creature(CreatureType.Wizard)); break;
      
    }
    for (var i = 3; i < this.localGameState.playerList.length; i++ ) {
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
      this.localGameState.creaturePool.addCreatureToPool(3, CreatureType.Mortiserion);
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

  getCurrentSelection(index: number): string {
    if (this.localGameState.playerList[0].creatureList[index].getGear() !== null) {
      return this.localGameState.playerList[0].creatureList[index].getGear().getName();
    } else {
      return 'None';
    }
  }

  toggleSelection(index: number): void {
    var originalGear: Gear = this.localGameState.playerList[0].creatureList[index].getGear();    

    if (this.localGameState.playerList[0].getGearList().length === 0) {
      this.localGameState.playerList[0].creatureList[index].setGear(null);  
    } else {
      var gearRemoved: Gear[] = this.localGameState.playerList[0].getGearList().splice(0, 1);
      this.localGameState.playerList[0].creatureList[index].setGear(gearRemoved[0]);  
    }  

    if (originalGear !== null) {
      this.localGameState.playerList[0].addToGearList(originalGear);
    }

    

}

}
