import reducer, { ActionType } from "./reducers";
import { CHARACTERS } from "@models/Character";
import Game, { initialGame } from "@models/Game";
import Player from "@models/Player";

describe("players reducer", () => {
  var firstPlayer: Player = {
    character: CHARACTERS[0],
    pocket: [],
    score: {
      wins: 0,
      ties: 0,
      losses: 0,
    },
    isUser: true,
    playerId: 0,
  };

  const gameWithOnePlayer: Game = reducer(initialGame, {
    type: ActionType.ADD_PLAYER,
    payload: { character: CHARACTERS[0] },
  });

  const gameWithTwoPlayers = reducer(gameWithOnePlayer, {
    type: ActionType.ADD_PLAYER,
    payload: { character: CHARACTERS[1] },
  });

  it("ADD_PLAYER should add a player based on the character payload", () => {
    expect(gameWithOnePlayer).toMatchObject({
      ...initialGame,
      players: [firstPlayer],
    });
  });

  it("ADD_PLAYER first player should have isUser property of true", () => {
    expect(gameWithOnePlayer.players[0].isUser).toBe(true);
  });

  it("ADD_PLAYER second player should have isUser property of false", () => {
    expect(gameWithTwoPlayers.players[1].isUser).toBe(false);
  });

  it("ADD_PLAYER should throw an error if missing character in payload", () => {
    expect(() =>
      reducer(initialGame, {
        type: ActionType.ADD_PLAYER,
        payload: {},
      })
    ).toThrow("Missing character");
  });

  it("RESET_GAME should reset the player array", () => {
    expect(
      reducer(gameWithOnePlayer, {
        type: ActionType.RESET_GAME,
        payload: {},
      })
    ).toMatchObject(initialGame);
  });
});
