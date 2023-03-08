import React from "react";
import Character from "@models/Character";
import Image from "next/image";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { useGameContext } from "@contexts/GameProvider";
import Player from "@models/Player";

type CharacterProps = {
  character: Character;
  onClick?: () => void;
  player?: Player;
};

const CharacterImage = ({ player, character, onClick }: CharacterProps) => {
  const { name, nickname } = character;
  const { players } = useGameContext();
  const isGameBegun = players.length === 6;
  const playerInGame = Boolean(
    players.find((player) => player.character.avatar == character.avatar)
  );
  const isUser = Boolean(player?.isUser);
  const opactity = isGameBegun ? "100%" : playerInGame ? "25%" : "100%";
  const border = player ? `2px solid ${isUser ? "red" : "black"}` : "";

  const handleClick = () => {
    if (!isGameBegun) {
      onClick && !playerInGame && onClick();
    } else {
      onClick && onClick();
    }
  };
  return (
    <OverlayTrigger
      placement="bottom"
      overlay={
        <Tooltip id={`tooltip-bottom`}>{isGameBegun ? nickname : name}</Tooltip>
      }
    >
      <Image
        src={character.avatar}
        alt={character.name}
        onClick={handleClick}
        width="60"
        height="60"
        style={{ borderRadius: "30px", opacity: opactity, border: border }}
      />
    </OverlayTrigger>
  );
};

export default CharacterImage;
