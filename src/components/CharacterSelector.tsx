import React, { useState } from "react";
import Character, { CHARACTERS } from "@models/Character";
import { useGameContext, useGameDispatchContext } from "@contexts/GameProvider";
import { ActionType } from "@services/game/reducers";
import CharacterImage from "./CharacterImage";
import { GameState } from "@models/Game";

type Props = {};
/**
 * Character selector allows the user to select their own character
 */
const CharacterSelector = (props: Props) => {
  const [characters, setCharacters] = useState<Array<Character>>([]);
  const { state } = useGameContext();
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

  return state == GameState.SELECTING_PLAYERS ? (
    <div>
      <h1>
        {characters.length == 0
          ? "Which character would you like to be?"
          : `${characters[0].nickname}, who would you like to play with?`}
      </h1>

      {characters.length > 1 && (
        <h3>{`Please select ${6 - characters.length} more`}</h3>
      )}
      <div className="selector-character-panel">
        {CHARACTERS.map((character) => {
          const playerInGame = Boolean(
            characters.find((player) => player.avatar == character.avatar)
          );

          const isUser = Boolean(characters[0]?.avatar == character.avatar);
          const className = `${playerInGame && "selected"} ${isUser && "user"}`;

          return (
            <CharacterImage
              isUser={isUser}
              className={className}
              character={character}
              onClick={() => addPlayer(character)}
              key={character.avatar}
            />
          );
        })}
      </div>
    </div>
  ) : null;
};

export default CharacterSelector;
