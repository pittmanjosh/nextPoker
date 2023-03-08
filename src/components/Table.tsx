import React from "react";
import Card from "@components/Card";
import { useGameContext } from "@contexts/GameProvider";
import CharacterImage from "./CharacterImage";
Card;

type Props = {};

const Table = (props: Props) => {
  const { players } = useGameContext();

  return players.length === 6 ? (
    <div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
      {players.map((player) => (
        <CharacterImage
          character={player.character}
          key={player.character.nickname}
          onClick={() => {}}
          player={player}
        />
      ))}
    </div>
  ) : null;
};

export default Table;
