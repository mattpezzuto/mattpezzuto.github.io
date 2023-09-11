import { Creature } from './creature';

export class Player {
    name: string;
    life: number;
    gold: number;
    refreshCounter: number;
    computerControlled: boolean;
    creatureList: Creature[];
    wins: number;
    losses: number;
    ties: number;

    constructor(name: string, computerControlled: boolean) {
        this.name = name;
        this.life = 40;
        this.gold = 0;
        this.refreshCounter = 10;
        this.computerControlled = computerControlled;
        this.creatureList = [];
        this.wins=0;
        this.losses=0;
        this.ties=0;
    }
    incrementWins() {
        this.wins++;
    }
    incrementLoses() {
        this.losses++;
    }
    incrementTies() {
        this.ties++;
    }

    getRecord() :string {
        return this.wins + ' - ' + this.losses + ' - ' + this.ties;
    }
}