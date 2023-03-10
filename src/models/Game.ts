import Card from "@classes/Card";
import Player from "@models/Player";
import { createDeck, shuffleDeck } from "@services/deck";
import Hand, { emptyHands } from "@models/Hand";

export enum GameState {
  "SELECTING_PLAYERS",
  "AWAITING_POCKET",
  "AWAITING_FLOP",
  "AWAITING_TURN",
  "AWAITING_RIVER",
  "UPDATING_SCORE",
  "SAVING_PROGRESS",
}
type Game = {
  state: GameState;
  players: Player[];
  deck: Card[];
  community: Card[];
  hands: Hand[];
};

export const initialGame: Game = {
  state: GameState.SELECTING_PLAYERS,
  players: [],
  deck: shuffleDeck(createDeck()),
  community: [],
  hands: emptyHands,
};

export default Game;
