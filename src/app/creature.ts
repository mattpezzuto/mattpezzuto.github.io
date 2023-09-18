import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { CreatureStats } from './creatureStats';

export enum CreatureType {

    Empty,
    Gnome,
    Goblin,
    Genie,
    Dwarf,
    SkeletonWarrior,
    Elf,
    Orc,
    Paladin, 
    Wizard,
    TreeOfLife,
    Necromancer,
    Archer,
    Bard,
    DragonEgg,
    DemonPortal,
    Demon,
    Dragon,
    Sorcerous
};

export class Creature {
    readonly createType: CreatureType;
    readonly creatureStats: CreatureStats;
    

    currentLife: number;
    currentArmor: number;
    currentArmorBuffUsed: boolean;
    currentLifeBuffUsed: boolean;

    constructor(creatureType: CreatureType) {
        this.createType = creatureType;
        this.creatureStats = this.getCreatureStatsFor(creatureType);
        this.currentArmor = this.creatureStats.armor;
        this.currentLife = this.creatureStats.life;
        this.currentArmorBuffUsed = false;
        this.currentLifeBuffUsed = false;
    }

    public getName() { return this.creatureStats.name; };
    public getImage() { return this.creatureStats.image; };

    // constructor(creatureType, name, life, attack, dex, armor, image) {
    //     this.createType = creatureType;
    //     this.name = name;
    //     this.life = life;
    //     this.attack = attack;
    //     this.dex = dex;
    //     this.armor = armor;
    //     this.image = '../assets/img/' + image;
    //     this.currentLife = life;
    //     this.currentArmor = armor;
    //     this.armorBuff = 0;
    //     this.currentArmorBuffUsed = false;
    //     this.lifeBuff = 0;
    //     this.currentLifeBuffUsed = false;
    // }

    public preCombat(): void {
        this.currentLife = this.creatureStats.life;
        this.currentArmor = this.creatureStats.armor;
        this.currentArmorBuffUsed = false;
        this.currentLifeBuffUsed = false;
    }

    public getCopy(): Creature {
        var value: Creature = new Creature(this.createType);
        // value.setArmorBuff(this.armorBuff);
        // value.setLifeBuff(this.lifeBuff);
        return value;
    }

    public setArmorBuff(buff: number) {
        this.creatureStats.armorBuff = buff;
    }

    public getArmorBuff(): number {
        return this.creatureStats.armorBuff;
    }

    public setLifeBuff(buff: number) {
        this.creatureStats.lifeBuff = buff;
    }

    public getLifeBuff(): number {
        return this.creatureStats.lifeBuff;
    }

    getCreatureStatsFor(creatureType: CreatureType) : CreatureStats {
        var creatureStats: CreatureStats = new CreatureStats();
        var name, image: string;
        var life, attack, dex, armor, magicResist: number = 0, magicResistBuff: number = 0, armorBuff: number = 0, lifeBuff: number = 0;
        switch( creatureType ) {
            case CreatureType.Archer:
                name = 'Archer'; life = 10; attack = 10; dex = 16; armor = 1; image = 'archer.png'; break;
            case CreatureType.Bard:
                name = 'Bard'; life = 10; attack = 5; dex = 12; armor = 1; image = 'femalebard.png'; break;
            case CreatureType.Demon: 
                name = 'Demon'; life = 20; attack = 6; dex = 10; armor = 3; image = 'demon.png'; break;
            case CreatureType.DemonPortal:
                name = 'Demon Portal'; life = 1; attack = 1; dex = 6; armor = 0; image = 'black.jpg'; break;
            case CreatureType.DragonEgg:
                name = 'Dragon Egg'; life = 1; attack = 1; dex = 6; armor = 0; image = 'black.jpg'; break;
            case CreatureType.Dwarf:
                name = 'Dwarf'; life = 20; attack = 7; dex = 6; armor = 3; image = 'dwarfwarrior.png'; break;
            case CreatureType.Elf:
                name = 'Elaron'; life = 16; attack = 5; dex = 16; armor = 1; image = 'elaron.png'; break;
            case CreatureType.Gnome:
                name = 'Gnome'; life = 10; attack = 5; dex = 12; armor = 1; image = 'gnome.png'; break;
            case CreatureType.Goblin:
                name = 'Goblin'; life = 10; attack = 5; dex = 14; armor = 1; image = 'goblin.png'; break;
            case CreatureType.Genie:
                name = 'Genie'; life = 16; attack = 6; dex = 10; armor = 2; magicResist = 25; image = 'genie.gif'; break;
            case CreatureType.Necromancer:
                name = 'Necromancer'; life = 16; attack = 5; dex = 8; armor = 5; image = 'necromancer.png'; break;
            case CreatureType.Orc:
                name = 'Orc'; life = 18; attack = 10; dex = 8; armor = 3; image = 'orc.png'; break;
            case CreatureType.Paladin:
                name = 'Paladin'; life = 17; attack = 8; dex = 8; armor = 3; magicResist = 25;
                armorBuff = 2; image = 'paladin.png'; break;
            case CreatureType.SkeletonWarrior:
                name = 'Skeleton Warrior'; life = 12; attack = 5; dex = 8; armor = 2; image = 'skeletonwarrior.png'; break;
            case CreatureType.Wizard:
                name = 'Wizard'; life = 10; attack = 10; dex = 8; armor = 1; image = 'wizard.png'; break;
            case CreatureType.TreeOfLife:
                    name = 'Tree of Life'; life = 20; attack = 1; dex = 8; armor = 1; image = 'treeoflife.png'; 
                    lifeBuff = 5; break;
            case CreatureType.Sorcerous: 
                name = 'Sorcerous'; life = 10; attack = 10; dex = 8; armor = 1; image = 'sorcerous.png'; break;

            case CreatureType.Dragon:
                name = 'Dragon'; life = 20; attack = 12; dex = 10; armor = 5; magicResist = 75; image = 'black.jpg'; break;

            case CreatureType.Empty:
                name = ''; life = 1; attack = 1; dex = 1; armor = 0; image = 'blank.jpg'; break;
            default:
                console.log("Error, no creatureType found");
        }

        creatureStats.name = name;
        creatureStats.life = life;
        creatureStats.attack = attack;
        creatureStats.dex = dex;
        creatureStats.armor = armor;
        creatureStats.magicResist = magicResist;
        creatureStats.image = '../assets/img/' + image;
        creatureStats.lifeBuff = lifeBuff;
        creatureStats.armorBuff = armorBuff;
        
        return creatureStats;
    }


}