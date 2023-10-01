import { templateSourceUrl } from '@angular/compiler';
import {Creature, CreatureType} from './creature'

export class CreaturePool {

    tier1:  Creature[];
    tier2:  Creature[];
    tier3:  Creature[];

    constructor() {

        this.tier1 = [];
        this.tier2 = [];
        this.tier3 = [];
    }

    public addCreatureToPool(count: number, creatureType: CreatureType) {
        console.log('creatureType = ' + creatureType);  

        for (var i = 0; i< count; i++) {
            var tempCreature: Creature = new Creature(creatureType);
            this.tier1.push(tempCreature);
        }
      }

    removeCreatureFromPool(index){
        console.log('before:' + this.tier1.length);
        this.tier1.splice(index, 1);
        console.log('after:' + this.tier1.length);
    }

    getCreaturePool(): Creature[] {
        return this.tier1;
    }
        
}