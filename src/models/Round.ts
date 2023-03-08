import Card from "@classes/Card";
import Hand from "@models/Hand";
enum RoundState {
  "NEW_ROUND",
  "DEAL_POCKET",
  "DEAL_FLOP",
  "DEAL_TURN",
  "DEAL_RIVER",
  "END_ROUND",
}

type RoundAction = {
  type: RoundState;
};

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
