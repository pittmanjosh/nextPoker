import { Card } from "../models/Card";

const cardSort = (firstCard: Card, secondCard: Card) => {
  if (firstCard.value.points == secondCard.value.points) {
    if (firstCard.suit.sortIndex < secondCard.suit.sortIndex) {
      return -1;
    } else {
      return 1;
    }
  }

  if (firstCard.value.points < secondCard.value.points) {
    return -1;
  } else {
    return 1;
  }
};

export default function sortCards(cards: Card[]): Card[] {
  const givenCards = [...cards];
  givenCards.sort(cardSort);
  return givenCards;
}
