import { Player } from './Player.model';
import { CreaturePool } from './creaturePool.model';

export class GameState {
    stage: number;
    turn: number;
    playerList: Player[];
    creaturePool: CreaturePool;

}