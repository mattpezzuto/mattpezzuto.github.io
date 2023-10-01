import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { CreatureStats } from './creatureStats';
import { Gear, GearType } from './gear';

export enum CreatureType {

    Empty,
    Locked,
    Gnome,
    CarrionCrawler,
    Goblin,
    Genie,
    Dwarf,
    SkeletonWarrior,
    Elaron,
    Orc,
    Kobold,
    Paladin, 
    Wizard,
    TreeOfLife,
    Necromancer,
    Mortiserion,
    Archer,
    Bard,
    DragonEgg,
    DemonPortal,
    Demon,
    Dragon,
    FrostGiant,
    InfestedRat,
    PurpleWand,
    GoldPile,
    Recruitment,
    Refresh,
    NoRats,
    TrojanHorse,
    Sorcerous
};



export class Creature {
    readonly creatureType: CreatureType;
    private readonly creatureStats: CreatureStats;
    private currentStats: CreatureStats;
    private gear: Gear;

    currentArmorBuffUsed: boolean;
    currentLifeBuffUsed: boolean;

    constructor(creatureType: CreatureType) {
        this.creatureType = creatureType;
        this.creatureStats = this.getCreatureStatsFor(creatureType);
        this.currentStats = this.getCreatureStatsFor(creatureType);
        this.currentArmorBuffUsed = false;
        this.currentLifeBuffUsed = false;
        this.gear = null;
    }

    getCreatureStats(): CreatureStats { return this.creatureStats; };
    getCurrentStats(): CreatureStats { return this.currentStats; };
    getGear(): Gear { return this.gear; };
    setGear(gear: Gear): void { this.gear= gear;};

    public getName() { return this.creatureStats.name; };
    public getImage() { return this.creatureStats.image; };

    public preCombat(): void {
        this.currentStats = this.getCreatureStatsFor(this.creatureType);
        this.currentArmorBuffUsed = false;
        this.currentLifeBuffUsed = false;
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
        var life, dex, armor, charisma: number = 10,
            attack: number = 0, magicAttack: number = 0, magicResist: number = 0, revivals: number = 0,
            magicResistBuff: number = 0, armorBuff: number = 0, lifeBuff: number = 0, magicBuff: number = 0;
        switch( creatureType ) {
            case CreatureType.Archer:
                name = 'Archer'; life = 10; attack = 12; dex = 16; armor = 1; charisma = 12; image = 'archer.png'; break;
            case CreatureType.Bard:
                name = 'Bard'; life = 15; attack = 8; dex = 12; armor = 1; charisma = 18; lifeBuff = 5; image = 'femalebard.png'; break;
            case CreatureType.CarrionCrawler:
                name = 'Carrion Crawler'; life = 150; attack = 12; dex = 12; armor = 6; image = 'carrioncraler.png'; break;
            case CreatureType.Demon: 
                name = 'Demon'; life = 20; attack = 12; dex = 10; armor = 4; charisma = 4; image = 'demon.png'; break;
            case CreatureType.DemonPortal:
                name = 'Demon Portal'; life = 1; attack = 1; dex = 6; armor = 0; image = 'demonportal.png'; break;
            case CreatureType.DragonEgg:
                name = 'Dragon Egg'; life = 1; attack = 1; dex = 6; armor = 0; image = 'dragonegg.png'; break;
            case CreatureType.Dwarf:
                name = 'Dwarf'; life = 20; attack = 10; dex = 6; armor = 3; image = 'dwarfwarrior.png'; break;
            case CreatureType.Elaron:
                name = 'Elaron'; life = 12; attack = 5; magicAttack = 5; dex = 16; charisma = 14; armor = 2; image = 'elaron.png'; 
                magicResist = 50; magicResistBuff = 10; break;
            case CreatureType.FrostGiant:
                name = 'Frost Giant'; life = 25; attack = 8; dex = 6; armor = 5; image = 'frostgiant.png'; break;
            case CreatureType.InfestedRat:
                name = 'Infested Rat'; life = 8; attack = 4; dex = 12; armor = 0; image = 'infestedrat.png'; break;
            case CreatureType.Gnome:
                name = 'Gnome'; life = 10; attack = 8; dex = 12; armor = 2; image = 'gnome.png'; break;
            case CreatureType.Goblin:
                name = 'Goblin'; life = 10; attack = 8; dex = 14; armor = 2; image = 'goblin.png'; break;
            case CreatureType.Genie:
                name = 'Genie'; life = 16; attack = 6; magicAttack = 6; dex = 10; armor = 3; magicResist = 25; image = 'genie.gif'; break;
            case CreatureType.Kobold:
                name = 'Kobold'; life = 12; attack = 8; dex = 14; armor = 2; magicResist = 10; image = 'kobold.png'; break;
            case CreatureType.Necromancer:
                name = 'Necromancer'; life = 16; attack = 5; dex = 8; armor = 5; 
                revivals = 1; image = 'necromancer.png'; break;
            case CreatureType.Mortiserion:
                    name = 'Mortiserion'; life = 16; attack = 5; dex = 8; armor = 5; 
                    revivals = 1; image = 'mortiserion.png'; break;
            case CreatureType.TrojanHorse:
                name = 'Trojan Horse'; life = 1; attack = 1; dex = 1; armor = 1; image = 'trojanhorse.png';  break;
            case CreatureType.Orc:
                name = 'Orc'; life = 18; attack = 12; dex = 8; armor = 3; image = 'orc.png'; break;
            case CreatureType.Paladin:
                name = 'Paladin'; life = 18; attack = 6; dex = 8; armor = 4; magicResist = 40;
                armorBuff = 2; image = 'paladin.png'; break;
            case CreatureType.SkeletonWarrior:
                name = 'Skeleton Warrior'; life = 12; attack = 7; dex = 8; armor = 2; magicResist = 10; 
                revivals = 1; image = 'skeletonwarrior.png'; break;
            case CreatureType.Wizard:
                name = 'Wizard'; life = 10; magicAttack = 15; dex = 8; armor = 1; magicResist = 10; charisma = 16; image = 'wizard.png'; break;
            case CreatureType.TreeOfLife:
                name = 'Tree of Life'; life = 30; attack = 2; dex = 8; armor = 1; revivals = 1; image = 'treeoflife.png'; 
                lifeBuff = 5; break;
            case CreatureType.Sorcerous: 
                name = 'Sorcerous'; life = 10; magicAttack = 25; dex = 8; armor = 1; image = 'sorcerous.png'; break;

            case CreatureType.Dragon:
                name = 'Dragon'; life = 20; magicAttack = 15; dex = 8; armor = 5; magicResist = 75; image = 'dragon.png'; break;
            case CreatureType.PurpleWand:
                name = 'Purple Wand'; life = 1; attack = 1; dex = 1; armor = 0; image = 'purplewand.png'; break;
            case CreatureType.GoldPile:
                name = 'Gold Pile'; life = 1; attack = 1; dex = 1; armor = 0; image = 'goldpile.png'; break;
            case CreatureType.Empty:
                name = 'Open Slot'; life = 1; attack = 1; dex = 1; armor = 0; image = 'blank.jpg'; break;
            case CreatureType.Recruitment:
                name = 'Open Slot'; life = 1; attack = 1; dex = 1; armor = 0; image = 'recruitment.jpg'; break;
            case CreatureType.Refresh:
                name = 'Open Slot'; life = 1; attack = 1; dex = 1; armor = 0; image = 'refresh.png'; break;
            case CreatureType.NoRats:
                name = 'Open Slot'; life = 1; attack = 1; dex = 1; armor = 0; image = 'norats.png'; break;
            case CreatureType.Locked:
                name = 'Locked'; life = 1; attack = 1; dex = 1; armor = 0; image = 'blank.jpg'; break;
    
            default:
                console.log("Error, no creatureType found");
        }

        creatureStats.name = name;
        creatureStats.life = life;
        creatureStats.attack = attack;
        creatureStats.magicAttack = magicAttack;
        creatureStats.dex = dex;
        creatureStats.armor = armor;
        creatureStats.magicResist = magicResist;
        creatureStats.image = '../assets/img/' + image;
        creatureStats.lifeBuff = lifeBuff;
        creatureStats.armorBuff = armorBuff;
        creatureStats.magicBuff = magicBuff;
        creatureStats.revivals = revivals;
        creatureStats.charisma = charisma;
        
        return creatureStats;
    }


}