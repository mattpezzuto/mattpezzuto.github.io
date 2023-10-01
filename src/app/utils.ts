import { Creature, CreatureType } from "./creature";

export default class Utils {
    static upgradeRecruitment() {
        var result: CreatureType;
        var pickOne = Math.floor((Math.random() * 4) + 0);
        console.log('pickOne = ' + pickOne);
        switch(pickOne) {
          case 0:
            result = CreatureType.Elaron; break;
          case 1:
            result = CreatureType.Paladin; break;
          case 2:
            result = CreatureType.DragonEgg; break;
          case 3:
            result = CreatureType.DemonPortal; break;
        }
        return result;
    }

    static findFirstRatSlot(creatureList: Creature[]): number {
        var slot = -1;
        console.log('find first slot:  len = ' + creatureList.length);
        for (var i = 0; i< creatureList.length; i++) {
            console.log('creatureType = ' + creatureList[i].creatureType + ', ratCreatureType = ' + CreatureType.InfestedRat);
            if ((creatureList[i].creatureType === CreatureType.InfestedRat) && (slot == -1)) {
                slot = i;
            }
        }
        return slot;
    }
}