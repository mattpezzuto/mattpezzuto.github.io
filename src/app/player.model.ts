import { Creature } from './creature';

export class Player {
    name: string;
    life: number;
    gold: number;
    computerControlled: boolean;
    creatureList: Creature[];
}