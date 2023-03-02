import createDeck from "@services/createDeck";
import Card from "./Card";
import { default as shuffleUtil } from "src/utils/shuffle";

class Deck {
  private cards: Array<Card>;

  constructor() {
    this.cards = shuffleUtil(createDeck());
  }

  getCards() {
    return this.cards;
  }

  getLength() {
    return this.cards.length;
  }

  shuffle() {
    this.cards = shuffleUtil(this.cards);

    return this;
  }

  deal(): Card {
    if (this.cards.length > 0) {
      const dealtCard: Card = this.cards[0];
      this.cards.shift();
      return dealtCard;
    } else {
      throw "Insufficient Cards";
    }
  }
}

export default Deck;
