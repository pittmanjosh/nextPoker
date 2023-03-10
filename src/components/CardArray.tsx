import Card from "@classes/Card";
import React from "react";
import { default as ArrayCard } from "@components/Card";

type Props = {
  cards: Card[];
  showFront: boolean;
};

const CardArray = ({ cards, showFront }: Props) => {
  return (
    <div className="card-array">
      {cards.map((card, i) => {
        return <ArrayCard card={card} showFront={showFront} key={i} />;
      })}
    </div>
  );
};

export default CardArray;
