import Round from "@models/Round";

export enum RoundState {
  "NEW_ROUND",
  "DEAL_POCKET",
  "DEAL_FLOP",
  "DEAL_TURN",
  "DEAL_RIVER",
  "END_ROUND",
}

export type RoundAction = {
  type: RoundState;
};

export const initialRound: Round = {
  community: [],
  hands: [],
  deck: [],
};

export default function roundReducer(round: Round, action: RoundAction): Round {
  switch (action.type) {
    case RoundState.NEW_ROUND: {
      return initialRound;
    }
    default: {
      return round;
    }
  }
}
