import Card from "@classes/Card";
import Game from "@models/Game";
import Ranking from "@models/Ranking";

type rank = {
  ranking: number[];
  bestHand: string;
};

// export default function rankHands(game: Game) {
//   const { hands, community } = game;

//   let ranking: rank;
//   if (community.length === 0) {
//     ranking = rankHand(hands.map((hand) => hand.pocket));
//   }

//   return;
// }

// export function potentialHands({ hands, community }: Game): Card[][] {
//   if ((community.length = 0)) {
//     return hands.map((hand) => hand.pocket);
//   } else {
//     return hands.map((hand) => permutateCards([...hand.pocket, ...community]));
//   }

//   return [[]];
// }
