import Card from "@classes/Card";
import Player from "./Player";
import { createDeck } from "@services/deck";

type Game = {
  players: Player[];
  deck: Card[];
};

export const initialGame: Game = {
  players: [],
  deck: createDeck(),
};

export default Game;
