import React, { useEffect, useState } from "react";
import Character, { CHARACTERS } from "@models/Character";
import { useGameContext, useGameDispatchContext } from "@contexts/GameProvider";
import { ActionType } from "@services/game/reducers";
import CharacterImage from "./CharacterImage";

type Props = {};
/**
 * Character selector allows the user to select their own character
 */
const CharacterSelector = (props: Props) => {
  const game = useGameContext();
  const [characters, setCharacters] = useState<Array<Character>>([]);
  const dispatch = useGameDispatchContext();

  const addPlayer = (character: Character) => {
    const currentPlayers = [...characters, character];
    setCharacters(currentPlayers);

    if (currentPlayers.length === 6) {
      dispatch({
        type: ActionType.ADD_PLAYERS,
        payload: {
          characters: currentPlayers,
        },
      });
    }
  };

  return game.players.length !== 6 ? (
    <div>
      <h1>
        {characters.length == 0
          ? "Which character would you like to be?"
          : `${characters[0].nickname}, who would you like to play with?`}
      </h1>
      <div className="selector-character-panel">
        {CHARACTERS.map((character) => (
          <CharacterImage
            character={character}
            onClick={() => addPlayer(character)}
            key={character.avatar}
          />
        ))}
      </div>
    </div>
  ) : null;
};

export default CharacterSelector;
