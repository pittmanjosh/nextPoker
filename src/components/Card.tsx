import React from "react";
import { Card as CardClass } from "@classes/Card";
import Image from "next/image";

type Props = {
  card: CardClass;
  showFront: boolean;
};
const Card = ({ card, showFront }: Props) => {
  return showFront ? (
    <div
      className={`playing-card ${card.getColor()}`}
    >{`${card.getSymbol()}`}</div>
  ) : (
    <div className="playing-card back"></div>
  );
};

export default Card;
