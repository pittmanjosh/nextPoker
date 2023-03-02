import React from "react";
import { Card as CardClass } from "@models/Card";

type Props = {
  card: CardClass;
};
const Card = ({ card }: Props) => {
  return (
    <div
      className={`playing-card ${card.getColor()}`}
    >{`${card.getSymbol()}`}</div>
  );
};

export default Card;
