import { Card } from "../../classes/Card";

export function sortCards(cards: Card[]): Card[] {
  const cardSort = (firstCard: Card, secondCard: Card) => {
    if (firstCard.getPoints() == secondCard.getPoints()) {
      if (firstCard.getSuitSortIndex() < secondCard.getSuitSortIndex()) {
        return -1;
      } else {
        return 1;
      }
    }

    if (firstCard.getPoints() < secondCard.getPoints()) {
      return -1;
    } else {
      return 1;
    }
  };

  const givenCards = [...cards];

  return givenCards.sort(cardSort);
}
