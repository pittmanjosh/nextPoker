import React from "react";
import Character from "@models/Character";
import Image from "next/image";

type Props = {
  character: Character;
};

const Character = ({ character }: Props) => {
  return <Image src={character.avatar} alt={character.name} />;
};

export default Character;
