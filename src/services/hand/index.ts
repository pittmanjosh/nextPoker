import Card from "@classes/Card";
import Game from "@models/Game";
import { sortCards } from "@services/card";

export function permutateCards(pocket: Card[], community: Card[]): Card[][] {
  const availableCards = sortCards([...pocket, ...community]);

  if (community.length < 4) {
    return [availableCards];
  }

  let permutations: Card[][];

  return [availableCards];
}
