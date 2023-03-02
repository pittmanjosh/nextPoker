import { Values, Suits, Card } from "@models/Card";

export default function createDeck() {
  const deck: Card[] = [];

  Suits.forEach((suit) => {
    Values.forEach((value) => {
      deck.push(new Card({ suit, value }));
    });
  });

  return deck;
}
