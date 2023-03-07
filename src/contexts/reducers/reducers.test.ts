import playersReducer from "./playersReducer";
import { CHARACTERS } from "@models/Character";
import Player from "@models/Player";

describe("players reducer", () => {
  const firstPlayer: Player = {
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

  it("ADD_PLAYER should add a player based on the character payload", () => {
    expect(
      playersReducer([], {
        type: "ADD_PLAYER",
        payload: { character: CHARACTERS[0] },
      })
    ).toMatchObject([firstPlayer]);
  });

  it("ADD_PLAYER first player should have isUser property of true", () => {
    expect(
      playersReducer([], {
        type: "ADD_PLAYER",
        payload: { character: CHARACTERS[0] },
      })[0].isUser
    ).toBe(true);
  });

  it("ADD_PLAYER second player should have isUser property of false", () => {
    expect(
      playersReducer([firstPlayer], {
        type: "ADD_PLAYER",
        payload: { character: CHARACTERS[0] },
      })[1].isUser
    ).toBe(false);
  });

  it("ADD_PLAYER should throw an error if missing character in payload", () => {
    expect(() =>
      playersReducer([], {
        type: "ADD_PLAYER",
        payload: {},
      })
    ).toThrow("Missing character");
  });
});
