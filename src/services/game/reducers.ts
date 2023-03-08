import Character from "@models/Character";
import Game from "@models/Game";
import { createDeck } from "../deck";
import { addPlayers, dealCard, assignPlayerOrder } from ".";

export enum ActionType {
  "START_GAME",
  "ADD_PLAYERS",
  "DEAL_CARD",
  "DEAL_COMMUNITY",
  "RESET_GAME",
}

export type GameAction = {
  type: ActionType;
  payload: ActionPayload;
};

export type ActionPayload = {
  characters?: Character[];
  playerId?: number;
};

export default function gameReducer(game: Game, action: GameAction): Game {
  switch (action.type) {
    case ActionType.ADD_PLAYERS: {
      return assignPlayerOrder(addPlayers(game, action.payload));
    }
    case ActionType.DEAL_CARD: {
      return dealCard(game);
    }
    case ActionType.RESET_GAME: {
      const deck = createDeck();
      return { players: [], deck: deck };
    }
    default: {
      return game;
    }
  }
}
