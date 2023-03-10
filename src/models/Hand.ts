import Card from "@classes/Card";

type Hand = {
  pocket: Card[];
  bestHand?: string;
  rank?: number;
};

const emptyPocket: Hand = { pocket: [] };
export const emptyHands: Hand[] = [
  emptyPocket,
  emptyPocket,
  emptyPocket,
  emptyPocket,
  emptyPocket,
  emptyPocket,
];

export default Hand;
