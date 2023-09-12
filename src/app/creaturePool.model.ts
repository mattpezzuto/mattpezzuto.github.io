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
        var name, image: string;
        var life, attack, dex, armor, armorBuff: number = 0, lifeBuff: number = 0;   

        console.log('creatureType = ' + creatureType);
  
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
                name = 'Dwarf'; life = 20; attack = 7; dex = 6; armor = 3; image = 'black.jpg'; break;
            case CreatureType.Elf:
                name = 'Elf'; life = 16; attack = 5; dex = 16; armor = 1; image = 'black.jpg'; break;
            case CreatureType.Gnome:
                name = 'Gnome'; life = 10; attack = 5; dex = 12; armor = 1; image = 'gnome.png'; break;
            case CreatureType.Goblin:
                name = 'Goblin'; life = 10; attack = 5; dex = 14; armor = 1; image = 'black.jpg'; break;
            case CreatureType.Genie:
                name = 'Genie'; life = 16; attack = 6; dex = 10; armor = 2; image = 'genie.gif'; break;
            case CreatureType.Necromancer:
                name = 'Necromancer'; life = 16; attack = 5; dex = 8; armor = 5; image = 'black.jpg'; break;
            case CreatureType.Orc:
                name = 'Orc'; life = 18; attack = 10; dex = 8; armor = 3; image = 'orc.png'; break;
            case CreatureType.Paladin:
                name = 'Paladin'; life = 17; attack = 8; dex = 8; armor = 3; 
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
                name = 'Dragon'; life = 20; attack = 12; dex = 10; armor = 5; image = 'black.jpg'; break;
            default:
                console.log("Error, no creatureType found");
        }
        for (var i = 0; i< count; i++) {
            console.log('Adding ' + name + ' to crature pool');
            var tempCreature: Creature = new Creature(creatureType);
            this.tier1.push(tempCreature);
        }
      }

    removeCreatureFromPool(index){
        console.log('before:' + this.tier1.length);
        this.tier1.splice(index, 1);
        console.log('after:' + this.tier1.length);
    }
        
}