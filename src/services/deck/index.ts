import { Values, Suits, Card } from "@classes/Card";

export function createDeck() {
  const deck: Card[] = [];

  Suits.forEach((suit) => {
    Values.forEach((value) => {
      deck.push(new Card({ suit, value }));
    });
  });

  return deck;
}

export function shuffleDeck(deck: Card[]) {
  const shuffledDeck: Card[] = [];

  while (deck.length > 0) {
    const randCard = deck.splice(Math.floor(deck.length * Math.random()), 1)[0];
    shuffledDeck.push(randCard);
  }

  return shuffledDeck;
}
