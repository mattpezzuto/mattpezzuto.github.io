import { Component, OnInit, Input } from '@angular/core';
import { GameState } from '../gameState.model';
import { Battle } from '../battle';
import { Player } from '../player.model';
import { Creature, CreatureType } from '../creature';
import { QuestRewardType } from '../quest-rewards';


@Component({
  selector: 'app-select-quest',
  templateUrl: './select-quest.component.html',
  styleUrls: ['./select-quest.component.css']
})
export class SelectQuestComponent implements OnInit {

  @Input() localGameState: GameState;

  battleLogs: String[];
  titleLog: String;

  questCreature: Creature[] = [];
  questUnits: number[] = [];
  questRewards: string[] = [];
  questRewardImages1: Creature[] = [];
  questRewardImages2: Creature[] = [];
  questRewardImages3: Creature[] = [];
  questRewardImages4: Creature[] = [];
  questRewardImages5: Creature[] = [];

  constructor() { }

  getLowest(range: number, times: number) : number {
    var result: number = range;
    for (var i = 0; i< times; i++) {
      var roll = Math.floor(Math.random()*range);
      if (roll < result) { 
        result = roll;
      }
    }
    return result;
  }

  getRandom(start: number, end: number) : number {
    var result = Math.floor(Math.random() * (end - start + 1) + start);
    console.log('inRandom, start, end, rnd = ' + start + end + result);
    return result;
  }

  getQuestRewardList(questNum: number) : Creature[] {
    var creatureList: Creature[] = [];
    switch(questNum) {
      case QuestRewardType['Gold - 10g']:
        creatureList.push(new Creature(CreatureType.GoldPile)); break;
      case QuestRewardType['Gold - 25g']:
        creatureList.push(new Creature(CreatureType.GoldPile)); break;
      case QuestRewardType['Gold - 50g']:
        creatureList.push(new Creature(CreatureType.GoldPile)); 
        creatureList.push(new Creature(CreatureType.GoldPile)); break;
      case QuestRewardType['Remove Infested Rat']:
        creatureList.push(new Creature(CreatureType.NoRats)); break;
      case QuestRewardType['Gold - 75g']:
        creatureList.push(new Creature(CreatureType.GoldPile));   
        creatureList.push(new Creature(CreatureType.GoldPile)); 
        creatureList.push(new Creature(CreatureType.GoldPile)); break;
      case QuestRewardType['Gold - 100g']:
        creatureList.push(new Creature(CreatureType.GoldPile));   
        creatureList.push(new Creature(CreatureType.GoldPile));   
        creatureList.push(new Creature(CreatureType.GoldPile)); 
        creatureList.push(new Creature(CreatureType.GoldPile)); break;
      case QuestRewardType['Extra Refresh']:
        creatureList.push(new Creature(CreatureType.Refresh)); break;
      case QuestRewardType['Recruit Unit']:
        creatureList.push(new Creature(CreatureType.Recruitment)); break;
      case QuestRewardType['Purple Wand']:
        creatureList.push(new Creature(CreatureType.PurpleWand)); break;
      default:
        console.log('error');
    }
    return creatureList;
  }

  ngOnInit() {
    this.battleLogs = [];

    var rollsPerSlot = [5, 3, 2, 1, 1];

    for (var i = 0; i < 5; i++) {
      var rndCreature = this.getRandom(1 + i, 3+i);
      console.log('rndCreature=' + rndCreature);
      switch(rndCreature) {
        case 1:
          this.questCreature.push(new Creature(CreatureType.InfestedRat)); break;
        case 2:
          this.questCreature.push(new Creature(CreatureType.Goblin)); break;
        case 3:
          this.questCreature.push(new Creature(CreatureType.Kobold)); break;
        case 4:
          this.questCreature.push(new Creature(CreatureType.SkeletonWarrior)); break;
        case 5:
          this.questCreature.push(new Creature(CreatureType.FrostGiant)); break;
        case 6:
          this.questCreature.push(new Creature(CreatureType.Wizard)); break;
        case 7:
          this.questCreature.push(new Creature(CreatureType.Dragon)); break;
        default:
          console.log('error');
      }
      // this.questCreature.push(new Creature(CreatureType.InfestedRat));
      this.questUnits.push(this.getRandom(1+i, 5+i));
      var questNum = Math.min(this.getRandom(i, (1+i)*2), (Object.keys(QuestRewardType).length/2 - 1));
      console.log('questNum=' + questNum);
      this.questRewards.push(QuestRewardType[questNum]);
      switch (i) {
        case 0:  this.questRewardImages1 = this.getQuestRewardList(questNum); break;
        case 1:  this.questRewardImages2 = this.getQuestRewardList(questNum); break;
        case 2:  this.questRewardImages3 = this.getQuestRewardList(questNum); break;
        case 3:  this.questRewardImages4 = this.getQuestRewardList(questNum); break;
        case 4:  this.questRewardImages5 = this.getQuestRewardList(questNum); break;
      }
      
      console.log('keys=' + Object.keys(QuestRewardType).length/2);
    }
  }

  onSelectQuest(slot: number) {
    var listSlot = slot -1;
    this.localGameState.playerList[0].questCreature = this.questCreature[listSlot];
    this.localGameState.playerList[0].questUnits = this.questUnits[listSlot];
    this.localGameState.playerList[0].questReward = QuestRewardType[this.questRewards[listSlot]];
    this.localGameState.stage++;
  }

  onNext() {
    // this.localGameState.stage++;
  }

}
