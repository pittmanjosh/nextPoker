import React from "react";
import Character from "@models/Character";
import Image from "next/image";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { useGameContext } from "@contexts/GameProvider";
import Player from "@models/Player";

type CharacterProps = {
  character: Character;
  onClick?: () => void;
  isUser: boolean;
  className?: string;
};

const CharacterImage = ({
  character,
  onClick,
  isUser,
  className,
}: CharacterProps) => {
  const { name, nickname } = character;
  const { players } = useGameContext();
  const isGameBegun = players.length === 6;

  return (
    <OverlayTrigger
      placement="bottom"
      overlay={
        <Tooltip id={`tooltip-bottom`}>{isGameBegun ? nickname : name}</Tooltip>
      }
    >
      <Image
        className={`character-image ${className} ${isUser && "user"}`}
        src={character.avatar}
        alt={character.name}
        onClick={onClick}
        width="60"
        height="60"
      />
    </OverlayTrigger>
  );
};

export default CharacterImage;
