import Card from "../classes/Card";
import Character from "./Character";

export type Score = {
  wins: number;
  ties: number;
  losses: number;
};

export type Player = {
  character: Character;
  pocket: Card[];
  score: Score;
  isUser: boolean;
  playerId?: number;
  playerOrder?: number;
};

export default Player;
