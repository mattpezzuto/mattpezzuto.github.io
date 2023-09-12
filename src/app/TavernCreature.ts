import { Creature } from './creature';

export class TavernCreature {
    id: number;
    creature: Creature;
    sold:  boolean;
    poolSlot: number;

    constructor(id, creature, poolSlot) {
        this.id = id;
        this.creature = creature;
        console.log('aaa = ' + this.creature.getName());
        this.sold = false;
        this.poolSlot = poolSlot;
        console.log(this.sold);
    }

}