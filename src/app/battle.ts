import { Creature, CreatureType } from './creature';
import { GearType } from './gear';
import { Player } from './player.model';

export class Battle {
    player1: Player;
    player2: Player;

    titleLog: string;
    battleLogs: string[] = [];

    creatureListTeam1: Creature[] = [];
    creatureListTeam2: Creature[] = [];

    pDamageDoneTeam1: number = 0;
    mDamageDoneTeam1: number = 0;
    pDamageDoneTeam2: number = 0;
    mDamageDoneTeam2: number = 0;

    creaturePool: Creature[] = [];

    constructor(player1: Player, player2: Player, creaturePool: Creature[]) {
        this.player1 = player1;
        this.player2 = player2;
        this.creaturePool = creaturePool;
    }

    getNumberOf(team: Creature[], creatureType: CreatureType) {
      var total: number = 0;
      for (var i = 0; i< team.length; i++) {
        if (team[i].creatureType === creatureType) {
          total++;
        }
      }
      return total;
    }

    getCharismaCount(team: Creature[]): number {
      var count: number = 0;
      for (var i = 0; i < team.length; i++) {
        if (team[i].getCreatureStats().charisma >= 16) {
          count++;
        }
      }
      return count;
    }

    getRevivalCount(team: Creature[]): number {
      var count: number = 0;
      for (var i = 0; i < team.length; i++) {
          count+= team[i].getCurrentStats().revivals;
      }
      return count;
    }


    preCombatBuffs() {
      var necrosOnTeam1: number = this.getNumberOf(this.creatureListTeam1, CreatureType.Necromancer);
      var necrosOnTeam2: number = this.getNumberOf(this.creatureListTeam2, CreatureType.Necromancer);
      for (var i = 0; i< necrosOnTeam1; i++) {
        if (this.creatureListTeam1[i].getCurrentStats().revivals > 0) {
          this.creatureListTeam1[i].getCurrentStats().revivals += necrosOnTeam1;
        }
      }
      for (var i = 0; i< necrosOnTeam2; i++) {
        if (this.creatureListTeam2[i].getCurrentStats().revivals > 0) {
          this.creatureListTeam2[i].getCurrentStats().revivals += necrosOnTeam2;
        }
      }
      var highCharismaCountTeam1: number = this.getCharismaCount(this.creatureListTeam1);
 
      var highCharismaCountTeam2: number = this.getCharismaCount(this.creatureListTeam2);
      var rivialCountTeam1: number = this.getRevivalCount(this.creatureListTeam1);
      var rivialCountTeam2: number = this.getRevivalCount(this.creatureListTeam2);

      for (var i = 0; i< this.creatureListTeam1.length; i++) {
        if (this.creatureListTeam1[i].creatureType === CreatureType.Elaron) {
          this.creatureListTeam1[i].getCurrentStats().magicAttack = 5 * highCharismaCountTeam1;
        }
        if (this.creatureListTeam1[i].creatureType === CreatureType.Mortiserion) {
          this.creatureListTeam1[i].getCurrentStats().attack = 5 * rivialCountTeam1;
          this.creatureListTeam1[1].getCurrentStats().magicAttack = rivialCountTeam1;
        }
      }

      for (var i = 0; i< this.creatureListTeam2.length; i++) {
        if (this.creatureListTeam2[i].creatureType === CreatureType.Elaron) {
          this.creatureListTeam2[i].getCurrentStats().magicAttack = 5 * highCharismaCountTeam2;
        }
        if (this.creatureListTeam2[i].creatureType === CreatureType.Mortiserion) {
          this.creatureListTeam2[i].getCurrentStats().attack = 5 * rivialCountTeam2;
          this.creatureListTeam2[1].getCurrentStats().magicAttack = rivialCountTeam2;
        }
      }

    }

    getNumberOfRats(): number {
      var numberOfRats: number = 0;
      for (var i = 0; i < this.creaturePool.length; i++) {
        if (this.creaturePool[i].creatureType === CreatureType.InfestedRat) {
          numberOfRats++;
        }
      }
      return numberOfRats;
    }

    getTeam(team: Creature[]): Creature[] {
      var newTeam: Creature[] = [];
      team.forEach(val => {
        if (val.creatureType !== CreatureType.TrojanHorse) {
          newTeam.push(val);
        } else {
          var trojanHorsePool: Creature[] = [];
          var numberOfRatsInCreaturePool = this.getNumberOfRats() + 3;
          for (var i = 0; i < numberOfRatsInCreaturePool; i++) {
            trojanHorsePool.push(new Creature(CreatureType.InfestedRat));
          }
          trojanHorsePool.push(new Creature(CreatureType.Kobold));
          trojanHorsePool.push(new Creature(CreatureType.Gnome));
          trojanHorsePool.push(new Creature(CreatureType.Orc));
          trojanHorsePool.push(new Creature(CreatureType.Goblin));

          if (this.creaturePool.length > 40) {
            trojanHorsePool.push(new Creature(CreatureType.Archer));
          }

          if (this.creaturePool.length > 45) {
            trojanHorsePool.push(new Creature(CreatureType.Archer));
          }

          if (this.creaturePool.length > 50) {
            trojanHorsePool.push(new Creature(CreatureType.Dragon));
          }

          if (this.creaturePool.length > 55) {
            trojanHorsePool.push(new Creature(CreatureType.Dragon));
          }

          var unitList: string[] = [];
          for (var i = 0; i < 3; i++) {
            var slot = Math.floor(Math.random() * trojanHorsePool.length);
            newTeam.push(new Creature(trojanHorsePool[slot].creatureType));
            unitList.push(newTeam[i].getName());
          }
          this.battleLogs.push("The following creatures jump out of the trojan horse:  " + unitList[0] + ", " + unitList[1] + ", & " + unitList[2]);
        }

      });
      console.log('returning new team len = ' + newTeam.length);
      return newTeam;
    }

    performBattle() {

          // For some reason val=>Object.get creates a copy, but doesn't copy the methods that go along with the class
          
          this.creatureListTeam1 = this.getTeam(this.player1.creatureList);
          this.creatureListTeam2 = this.getTeam(this.player2.creatureList);
          
          var done: boolean = false;
    
          this.titleLog = 
            this.player1.name + "(" + this.player1.creatureList.length + ")  vs. " 
            + this.player2.name + "(" + this.player2.creatureList.length + ")";
    
          for (var i1 = 0; i1< this.creatureListTeam1.length; i1++) {
            this.creatureListTeam1[i1].preCombat();
          }
    
          for (var i2 = 0; i2< this.creatureListTeam2.length; i2++) {
            this.creatureListTeam2[i2].preCombat();
          }

          this.preCombatBuffs();
    
          if (this.creatureListTeam1.length === 0 || this.creatureListTeam2.length === 0) {
            done = true;
          }
    
          var isTurnTeam1 = this.doesTeamOneGoFirst(this.creatureListTeam1, this.creatureListTeam2); 
          
          var loopTimeOutCounter = 0;
          var attackPosTeam1: number = 0, attackPosTeam2: number = 0;
    
          while (!done) {
            loopTimeOutCounter++;
            if (loopTimeOutCounter > 1000) {
              done = true;
            }
    
            console.log('isTurnTeam1 = ' + isTurnTeam1);
    
            console.log('attackPosTeam1 = ' + attackPosTeam1 + ', team1.size = ' + this.creatureListTeam1.length + ', team2.size = ' + this.creatureListTeam2.length);
            if (isTurnTeam1) {
              this.performAttack(isTurnTeam1, this.creatureListTeam1, attackPosTeam1, this.creatureListTeam2, this.player1.name, this.player2.name);
              attackPosTeam1++;
              if (attackPosTeam1 > this.creatureListTeam1.length -1) { attackPosTeam1 = 0; }
            } else {
              this.performAttack(isTurnTeam1, this.creatureListTeam2, attackPosTeam2, this.creatureListTeam1, this.player2.name, this.player1.name);
              attackPosTeam2++;
              if (attackPosTeam2 > this.creatureListTeam2.length -1) { attackPosTeam2 = 0; }
            }
            isTurnTeam1 = !isTurnTeam1;
    
            this.creatureListTeam1 = this.processRevivals(this.creatureListTeam1, this.player1.name);
            this.creatureListTeam2 = this.processRevivals(this.creatureListTeam2, this.player2.name);
            var deathsOnTeam1: number[] = this.getDeathsOnTeam(this.creatureListTeam1);
            var deathsOnTeam2: number[] = this.getDeathsOnTeam(this.creatureListTeam2);


            console.log('deathsOnTeam1= ' + deathsOnTeam1);
            console.log('deathsOnTeam2= ' + deathsOnTeam2);
            for (var i = deathsOnTeam1.length;  i > 0; i--) {
              var deathIndex = deathsOnTeam1[i - 1];
              console.log('deathIndex = ' + deathIndex);
              this.battleLogs.push(
                "..." + this.creatureListTeam1[deathIndex].getName() + " dies"
              );
              this.creatureListTeam1.splice(deathIndex, 1);
              if (attackPosTeam1 >= deathIndex) {
                attackPosTeam1 = Math.max(attackPosTeam1-1, 0);
              }
            }
    
            for (var i = deathsOnTeam2.length;  i >  0; i--) {
              var deathIndex = deathsOnTeam2[i - 1];
              this.battleLogs.push(
                "..." + this.creatureListTeam2[deathIndex].getName() + " dies"
              );
              this.creatureListTeam2.splice(deathIndex, 1);
              if (attackPosTeam2 >= deathIndex) {
                attackPosTeam2 = Math.max(attackPosTeam2-1, 0);
              }
            } 
    
            if (this.creatureListTeam1.length === 0 || this.creatureListTeam2.length === 0 ) {
              done = true;
            }
          }
    }

    getWinner() : number {
        var winner:number = -1;  // assume tie
        if (this.creatureListTeam1.length === 0 && this.creatureListTeam2.length > 0 ) {
          winner = 1;
        } else if (this.creatureListTeam1.length > 0 && this.creatureListTeam2.length === 0 ) {
          winner = 0;
        }
        return winner;
    }

    getBattleLogs(): string[] { console.log('bl.len = ' + this.battleLogs.length); return this.battleLogs; }

    processRevivals(team: Creature[], playersName) : Creature[] {
      for (var i = 0; i < team.length; i++) {
        console.log('revivals = ' + team[i].getCurrentStats().revivals);
        if (team[i].getCurrentStats().life < 1 && team[i].getCurrentStats().revivals > 0) {
          team[i].getCurrentStats().revivals--;
          team[i].getCurrentStats().life = team[i].getCreatureStats().life / 2;
          console.log('new life total = ' + team[i].getCurrentStats().life + ', ' + team[i].getCreatureStats().life);
          this.battleLogs.push("..." + team[i].getName() + "(" + playersName + ") dies, but revives at half health.");
        }
      }
      return team;
    }

    getDeathsOnTeam(team: Creature[]) : number[] {
        var deaths: number[] = [];
        for (var i = 0; i < team.length; i++) {
          if (team[i].getCurrentStats().life < 1) {
              deaths.push(i);
          }
        }
        return deaths;
      }

    performAttack(isTurnTeam1: boolean, creatureListAttackTeam: Creature[], attackTeamPos: number, creatureListDefenderTeam: Creature[], attackPlayerName: string, defendPlayerName: string) {    
        if (creatureListAttackTeam[attackTeamPos].getArmorBuff() > 0 && creatureListAttackTeam[attackTeamPos].currentArmorBuffUsed == false) {
          for(var i = 0; i< creatureListAttackTeam.length; i++) {
            creatureListAttackTeam[i].getCurrentStats().armor += creatureListAttackTeam[attackTeamPos].getArmorBuff();
          }
          creatureListAttackTeam[attackTeamPos].currentArmorBuffUsed = true;

          this.logBuffAction(attackPlayerName, creatureListAttackTeam[attackTeamPos].getName());
        } else if (creatureListAttackTeam[attackTeamPos].getLifeBuff() > 0 && creatureListAttackTeam[attackTeamPos].currentLifeBuffUsed == false) {
              for(var i = 0; i< creatureListAttackTeam.length; i++) {
                creatureListAttackTeam[i].getCurrentStats().life += creatureListAttackTeam[attackTeamPos].getLifeBuff();
              }
              creatureListAttackTeam[attackTeamPos].currentLifeBuffUsed = true;
              this.logBuffAction(attackPlayerName, creatureListAttackTeam[attackTeamPos].getName());
        } else {
          if (creatureListAttackTeam[attackTeamPos].getCurrentStats().attack > 0) {
            var dmgDone = this.performPhysicalAttack(creatureListAttackTeam, attackTeamPos, creatureListDefenderTeam, attackPlayerName, defendPlayerName);
            if (isTurnTeam1) { this.pDamageDoneTeam1+= dmgDone; } else { this.pDamageDoneTeam2+=dmgDone;}
          }
          if (creatureListAttackTeam[attackTeamPos].getCurrentStats().magicAttack > 0 ) {
            var dmgDone = this.performMagicAttack(creatureListAttackTeam, attackTeamPos, creatureListDefenderTeam, attackPlayerName, defendPlayerName);
            if (isTurnTeam1) { this.mDamageDoneTeam1+= dmgDone; } else { this.mDamageDoneTeam2+=dmgDone;}
          }        
      }              
}

getDamageDone(team: number) {
    if (team === 0) {
        return this.pDamageDoneTeam1 + this.mDamageDoneTeam1;
    } else {
        return this.pDamageDoneTeam2 + this.mDamageDoneTeam2;
    }
}

getTauntIndexes(team: Creature[]) : number[] {
  var indexes: number[] = [];
  for (var i = 0; i< team.length; i++) {
    if (team[i].getGear() !== null && team[i].getGear().gearType === GearType.Taunt) {
      indexes.push(i);
    }
  }
  return indexes;
}

getTargetIndex(defedningTeam: Creature[]) : number {
  var index: number = 0;
  var tauntIndex: number[] = this.getTauntIndexes(defedningTeam);
  if (tauntIndex.length === 0) {
    index = Math.floor(Math.random() * defedningTeam.length); 
  } else if (tauntIndex.length === 1) {
    index = tauntIndex[0];
  } else {
    index = tauntIndex[ Math.floor(Math.random() * tauntIndex.length) ];
  }
  return index;
}

performPhysicalAttack(creatureListAttackTeam: Creature[], attackTeamPos: number, creatureListDefenderTeam: Creature[], attackPlayerName: string, defendPlayerName: string)
: number {
    var targetIndex = this.getTargetIndex(creatureListDefenderTeam);
    console.log('targetIndex = ' + targetIndex);
    var dodgedDefenderTeam: boolean = this.doesDefenderDodge(creatureListDefenderTeam[targetIndex].getCurrentStats().dex);
    var dmgDone = 0;
    if (!dodgedDefenderTeam) {
        dmgDone = this.getDamageAfterArmorCheck(creatureListAttackTeam, attackTeamPos, creatureListDefenderTeam);
        creatureListDefenderTeam[targetIndex].getCurrentStats().life = creatureListDefenderTeam[targetIndex].getCurrentStats().life - dmgDone;
        this.battleLogs.push(creatureListAttackTeam[attackTeamPos].getName() + "(" + attackPlayerName + ") deals " + dmgDone + " physical damage to " + 
          creatureListDefenderTeam[targetIndex].getName() + "(" + defendPlayerName + ")");
    } else {
        this.battleLogs.push(creatureListAttackTeam[attackTeamPos].getName() + "(" + attackPlayerName + ") attacks " + 
          creatureListDefenderTeam[targetIndex].getName() + "(" + defendPlayerName + ").  Dodged");
    }
    return dmgDone;
}

performMagicAttack(creatureListAttackTeam: Creature[], attackTeamPos: number, creatureListDefenderTeam: Creature[], attackPlayerName: string, defendPlayerName: string)
: number {
  var targetIndex = this.getTargetIndex(creatureListDefenderTeam);

  var dmg = this.getDamageAfterMagicResistCheck(creatureListAttackTeam, attackTeamPos, creatureListDefenderTeam);
  creatureListDefenderTeam[targetIndex].getCurrentStats().life = creatureListDefenderTeam[targetIndex].getCurrentStats().life - dmg; 
  this.battleLogs.push(creatureListAttackTeam[attackTeamPos].getName() + "(" + attackPlayerName + ") deals " + dmg + " magic damage to " +
  creatureListDefenderTeam[targetIndex].getName() + "(" + defendPlayerName + ")");
  return dmg;
}

getDamageAfterArmorCheck(attackerTeam: Creature[], attackTeamPos, defenderTeam: Creature[]): number {
var dmg = attackerTeam[attackTeamPos].getCurrentStats().attack;
if (defenderTeam[0].getCurrentStats().armor > 0) {
dmg = Math.max(dmg - defenderTeam[0].getCurrentStats().armor, 0);
defenderTeam[0].getCurrentStats().armor--;
}
console.log('Reduced ' + (attackerTeam[attackTeamPos].getCreatureStats().attack - dmg) + ' damage');
return dmg;
}

getDamageAfterMagicResistCheck(attackerTeam: Creature[], attackTeamPos: number, defenderTeam: Creature[]): number {
var reducedDmg = attackerTeam[attackTeamPos].getCurrentStats().magicAttack * defenderTeam[0].getCurrentStats().magicResist / 100;
var dmg = attackerTeam[attackTeamPos].getCurrentStats().magicAttack - reducedDmg;
console.log('Reduced ' + reducedDmg + ' damage');
return dmg;
}

doesDefenderDodge(dex: number): boolean {
var dodged: boolean = false;
if (Math.floor(Math.random() * 8000 + 1) < dex * dex * dex) {       // 20^3 dex^3 max = 72%
dodged = true;
}
return dodged;
}

doesTeamOneGoFirst(creatureListTeam1: Creature[], creatureListTeam2: Creature[]) : boolean {
var isTurnTeam1 = true;
var dexTeam1 = this.getTotalDexForTeam(creatureListTeam1);
var dexTeam2 = this.getTotalDexForTeam(creatureListTeam2);
if (dexTeam2 > dexTeam1) {
isTurnTeam1 = false;
}
return isTurnTeam1;
}

getTotalDexForTeam(creatureList: Creature[]) {
    var total = 0;
    for (var i = 0; i < creatureList.length; i++) {
        total += creatureList[i].getCreatureStats().dex;
    }
}
    
logBuffAction(playerName: string, creatureName: string) {
    this.battleLogs.push(
      creatureName + "(" + playerName + ") buffs the party. "
    );
}


}