import { ValueConverter } from '@angular/compiler/src/render3/view/template';

export enum CreatureType {

    Gnome,
    Goblin,
    Genie,
    Dwarf,
    SkeletonWarrior,
    Elf,
    Orc,
    Paladin, 
    Wizard,
    Necromancer,
    Archer,
    Bard,
    DragonEgg,
    DemonPortal,
    Demon,
    Dragon,
    Sorcerous
}

export class Creature {
    readonly name: string;
    readonly life: number;
    readonly attack: number;
    readonly dex: number;
    readonly armor: number;
    readonly image: string;

    currentLife: number;
    currentArmor: number;

    constructor(name, life, attack, dex, armor, image) {
        this.name = name;
        this.life = life;
        this.attack = attack;
        this.dex = dex;
        this.armor = armor;
        this.image = '../assets/img/' + image;
        this.currentLife = life;
        this.currentArmor = armor;
    }

    public preCombat(): void {
        this.currentLife = this.life;
        this.currentArmor = this.armor;
    }

    public getCopy(): Creature {
        var value: Creature;
        value = new Creature(this.name, this.life, this.attack, this.dex, this.armor, this.image);
        return value;
    }


}