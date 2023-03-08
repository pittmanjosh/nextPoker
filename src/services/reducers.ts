import Character from "@models/Character";
import Game from "@models/Game";
import { createDeck } from "./deck";
import { addPlayer, dealCard, assignPlayerOrder } from "./game";

export enum ActionType {
  "START_GAME",
  "ADD_PLAYER",
  "DEAL_CARD",
  "DEAL_COMMUNITY",
  "RESET_GAME",
}

export type GameAction = {
  type: ActionType;
  payload: ActionPayload;
};

export type ActionPayload = {
  character?: Character;
  playerId?: number;
};

export default function reducer(game: Game, action: GameAction): Game {
  switch (action.type) {
    case ActionType.ADD_PLAYER: {
      const updatedGame = addPlayer(game, action.payload);

      return assignPlayerOrder(updatedGame);
    }
    case ActionType.DEAL_CARD: {
      return dealCard(game);
    }
    case ActionType.RESET_GAME: {
      const deck = createDeck();
      return { players: [], community: [], deck: deck };
    }
    default: {
      return game;
    }
  }
}
