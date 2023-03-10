import Character from "@models/Character";
import Game, { GameState } from "@models/Game";
import { createDeck, shuffleDeck } from "../deck";
import {
  addPlayers,
  dealPocket,
  dealFlop,
  assignPlayerOrder,
  dealTurn,
  dealRiver,
} from ".";
import { emptyHands } from "@models/Hand";

export enum ActionType {
  "ADD_PLAYERS",
  "DEAL_POCKET",
  "DEAL_FLOP",
  "DEAL_TURN",
  "DEAL_RIVER",
  "UPDATE_SCORE",
  "RESET_GAME",
}

export type GameAction = {
  type: ActionType;
  payload: ActionPayload;
};

export type ActionPayload = {
  characters?: Character[];
};

export default function gameReducer(game: Game, action: GameAction): Game {
  switch (action.type) {
    case ActionType.ADD_PLAYERS: {
      return assignPlayerOrder(
        addPlayers(
          {
            ...game,
            state: GameState.AWAITING_POCKET,
          },
          action.payload
        )
      );
    }
    case ActionType.DEAL_POCKET:
      return dealPocket(game);
    case ActionType.DEAL_FLOP:
      return dealFlop(game);
    case ActionType.DEAL_TURN:
      return dealTurn(game);
    case ActionType.DEAL_RIVER:
      return dealRiver(game);
    case ActionType.RESET_GAME: {
      return {
        state: GameState.SELECTING_PLAYERS,
        players: [],
        hands: [],
        deck: createDeck(),
        community: [],
      };
    }
    default: {
      return game;
    }
  }
}
