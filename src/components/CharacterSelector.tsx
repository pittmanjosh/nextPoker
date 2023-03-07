import React, { useEffect, useState } from "react";
import Character, { CHARACTERS } from "@models/Character";
import Image from "next/image";
import Player from "@models/Player";
import Game from "@models/Game";

type CharacterProps = {
  character: Character;
  onClick?: () => void;
};

const Character = ({ character, onClick }: CharacterProps) => {
  return (
    <Image
      src={character.avatar}
      alt={character.name}
      onClick={onClick}
      width="50"
      height="50"
    />
  );
};

type SelectorProps = {
  game: Game;
  handleAdd: (newGame: Game) => void;
};

const CharacterSelector = ({ game, handleAdd }: SelectorProps) => {
  const currentPlayers = game.getPlayers();

  const availablePlayers: Character[] = CHARACTERS.filter((character) => {
    return !Boolean(
      currentPlayers.find((player) => player.getName() == character.name)
    );
  });

  useEffect(() => {}, [game]);

  return (
    <div>
      {availablePlayers.map((character) => (
        <Character
          character={character}
          key={character.name}
          onClick={() => {
            game.addPlayer(new Player(character, currentPlayers.length == 0));
            handleAdd(game);
          }}
        />
      ))}
    </div>
  );
};

export default CharacterSelector;
