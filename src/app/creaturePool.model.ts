import {Creature} from './creature'

export class CreaturePool {

    tier1:  Creature[];
    tier2:  Creature[];
    tier3:  Creature[];

    constructor(creatureList: Creature[]) {

        this.tier1 = [];
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 10; j++) {
                this.tier1.push(creatureList[j])
            }
        }
    }
        
}