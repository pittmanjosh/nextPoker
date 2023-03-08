import Card from "@classes/Card";
import Hand from "@models/Hand";

export type Round = {
  community: Card[];
  hands: Hand[];
  deck: Card[];
};

export const initialRound: Round = {
  community: [],
  hands: [],
  deck: [],
};

export default Round;
