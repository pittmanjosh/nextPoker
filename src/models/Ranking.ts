import Card from "@classes/Card";

type Ranking = {
  isFourOfKind?: boolean;
  isFullHouse?: boolean;
  isFlush?: boolean;
  isStraight?: boolean;
  isThreeOfKind?: boolean;
  isTwoPair?: boolean;
  isPair?: boolean;
  arrangedCards: Card[];
};

export default Ranking;
