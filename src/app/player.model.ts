import { Creature } from './creature';

export class Player {
    name: string;
    life: number;
    gold: number;
    refreshCounter: number;
    computerControlled: boolean;
    creatureList: Creature[];

    constructor(name: string, computerControlled: boolean) {
        this.name = name;
        this.life = 40;
        this.gold = 0;
        this.refreshCounter = 10;
        this.computerControlled = computerControlled;
        this.creatureList = [];
    }
}