import Card from "@classes/Card";
import Hand from "@models/Hand";

export type Round = {
  community: Card[];
  hands: Hand[];
  deck: Card[];
};

export default Round;
