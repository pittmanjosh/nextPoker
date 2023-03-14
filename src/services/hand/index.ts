import Card from "@classes/Card";
import { sortCards } from "@services/card";
import Hand from "@models/Hand";

export function permutateCards(pocket: Card[], community: Card[]): Card[][] {
  const availableCards = sortCards([...pocket, ...community]);

  // returns all provided cards if there are 5 or less
  if (community.length < 4) {
    return [availableCards];
  }

  let permutations: Card[][] = [];

  for (let i = 0; i < availableCards.length; i++) {
    const allCards = [...availableCards];
    allCards.splice(i, 1);

    if (community.length !== 5) {
      permutations.push(allCards);
    } else {
      for (let j = 0; j < 6; j++) {
        const permutation = [...allCards];
        permutation.splice(j, 1);
        permutations.push(permutation);
      }
    }
  }

  return permutations;
}

export function evaluateStraight(hand: Card[]): boolean {
  let isStraight = false;

  isStraight = hand.every((card, i) => {
    if (i == 0) return true;

    if (card.getPoints() + 1 == hand[i - 1].getPoints()) {
      return true;
    }

    return false;
  });

  return isStraight;
}

export function evaluateWheel(hand: Card[]): boolean {
  const firstCardIsAce = hand[0].getPoints() == 14;
  const secondCardIsFive = hand[1].getPoints() == 5;

  if (firstCardIsAce && secondCardIsFive) {
    return hand.every((card, i) => {
      if (i < 2) return true;

      if (card.getPoints() + 1 == hand[i - 1].getPoints()) {
        return true;
      }
    });
  }

  return false;
}
