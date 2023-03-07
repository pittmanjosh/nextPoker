import Card from "src/classes/Card";
import Character from "@models/Character";
import Player, { Score } from "@models/Player";

type PlayersAction = {
  type: "ADD_PLAYER" | "ADD_CARD" | "RESET_GAME";
  payload: {
    character?: Character;
    card?: Card;
  };
};

const initScore: Score = { wins: 0, ties: 0, losses: 0 };
const initPocket: Card[] = [];

export default function playersReducer(
  players: Player[],
  action: PlayersAction
) {
  switch (action.type) {
    case "ADD_PLAYER": {
      if (action.payload.character == undefined) {
        throw Error("Missing character");
      }

      const isUser: boolean = players.length == 0;

      return [
        ...players,
        {
          character: action.payload.character,
          score: initScore,
          pocket: initPocket,
          isUser,
          playerId: players.length,
        },
      ];
    }
    case "RESET_GAME": {
      return [];
    }
    default: {
      return [...players];
    }
  }
}
