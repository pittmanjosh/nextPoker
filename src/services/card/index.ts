import { Card } from "../../classes/Card";

export function cardValueComparison(firstCard: Card, secondCard: Card) {
  return secondCard.getPoints() - firstCard.getPoints();
}

function cardSorter(firstCard: Card, secondCard: Card) {
  const valueComparison = cardValueComparison(firstCard, secondCard);

  if (valueComparison === 0) {
    return firstCard.getSuitSortIndex() - secondCard.getSuitSortIndex();
  }

  return valueComparison;
}

/** Sorts cards by value, then by suit */
export function sortCards(cards: Card[]): Card[] {
  const givenCards = [...cards];

  return givenCards.sort(cardSorter);
}
