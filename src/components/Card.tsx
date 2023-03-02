import React from "react";
import { Card } from "@components/models/Card";

type Props = {
  card: Card;
};
const Card = (props: Props) => {
  const { card } = props;
  return (
    <div
      className={`playing-card ${card.suit.color}`}
    >{`${card.suit.symbol}${card.value.symbol}`}</div>
  );
};

export default Card;
