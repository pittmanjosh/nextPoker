import React from "react";
import { CHARACTERS } from "@models/Character";
import { useGameContext, useGameDispatchContext } from "@contexts/GameProvider";
import { ActionType } from "@services/reducers";
import CharacterImage from "./CharacterImage";

type Props = {};
/**
 * Character selector allows the user to select their own character
 */
const CharacterSelector = (props: Props) => {
  const { players } = useGameContext();
  const dispatch = useGameDispatchContext();

  return players.length < 6 ? (
    <div>
      <h1>
        {players.length == 0
          ? "Which character would you like to be?"
          : `${players[0].character.nickname}, who would you like to play with?`}
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          rowGap: "1em",
        }}
      >
        {CHARACTERS.map((character) => (
          <CharacterImage
            character={character}
            onClick={() => {
              dispatch({ type: ActionType.ADD_PLAYER, payload: { character } });
            }}
            key={character.avatar}
          />
        ))}
      </div>
    </div>
  ) : null;
};

export default CharacterSelector;
