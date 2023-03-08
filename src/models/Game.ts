import Card from "@classes/Card";
import Player from "./Player";
import { createDeck } from "@services/deck";

type Game = {
  players: Player[];
  community: Card[];
  deck: Card[];
  hands?: Hand[];
};

type Hand = {
  playerId: number;
  nameOfHand: string;
  cards: Card[];
};

export const initialGame: Game = {
  players: [],
  community: [],
  deck: createDeck(),
};

export default Game;
