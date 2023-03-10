import capitalizeFirstLetter from "../utils/capitalizeFirstLetter";

export interface iCard {
  suit: CardSuit;
  value: CardValue;
}

export class Card {
  private suit: CardSuit;
  private value: CardValue;

  constructor(card: iCard) {
    this.suit = card.suit;
    this.value = card.value;
  }

  getPoints() {
    return this.value.points;
  }

  getSuit() {
    return this.suit.name;
  }

  getColor() {
    return this.suit.color;
  }

  getFullName() {
    return `${capitalizeFirstLetter(
      this.value.name
    )} of ${capitalizeFirstLetter(this.suit.name)}`;
  }

  getSuitSortIndex() {
    return this.suit.sortIndex;
  }

  getSymbol() {
    return `${this.suit.symbol}${this.value.symbol}`;
  }
}

type CardSuit = {
  name: "spades" | "diamonds" | "clubs" | "hearts";
  color: "red" | "black";
  symbol: "♠" | "♥" | "◆" | "♣";
  sortIndex: number;
};

export const Spades: CardSuit = {
  name: "spades",
  color: "black",
  symbol: "♠",
  sortIndex: 0,
};

const Hearts: CardSuit = {
  name: "hearts",
  color: "red",
  symbol: "♥",
  sortIndex: 1,
};

export const Diamonds: CardSuit = {
  name: "diamonds",
  color: "red",
  symbol: "◆",
  sortIndex: 2,
};

export const Clubs: CardSuit = {
  name: "clubs",
  color: "black",
  symbol: "♣",
  sortIndex: 3,
};

type CardValue = {
  symbol: string;
  name: string;
  points: number;
};

export const Ace: CardValue = {
  symbol: "A",
  name: "ace",
  points: 14,
};

export const Two: CardValue = {
  symbol: "2",
  name: "two",
  points: 2,
};

export const Three: CardValue = {
  symbol: "3",
  name: "three",
  points: 3,
};

export const Four: CardValue = {
  symbol: "4",
  name: "four",
  points: 4,
};

export const Five: CardValue = {
  symbol: "5",
  name: "five",
  points: 5,
};

export const Six: CardValue = {
  symbol: "6",
  name: "six",
  points: 6,
};

const Seven: CardValue = {
  symbol: "7",
  name: "seven",
  points: 7,
};

const Eight: CardValue = {
  symbol: "8",
  name: "eight",
  points: 8,
};

const Nine: CardValue = {
  symbol: "9",
  name: "nine",
  points: 9,
};

const Ten: CardValue = {
  symbol: "10",
  name: "ten",
  points: 10,
};

const Jack: CardValue = {
  symbol: "J",
  name: "jack",
  points: 11,
};

const Queen: CardValue = {
  symbol: "Q",
  name: "queen",
  points: 12,
};

const King: CardValue = {
  symbol: "K",
  name: "king",
  points: 13,
};

export const Suits: CardSuit[] = [Spades, Diamonds, Clubs, Hearts];
export const Values: CardValue[] = [
  Ace,
  Two,
  Three,
  Four,
  Five,
  Six,
  Seven,
  Eight,
  Nine,
  Ten,
  Jack,
  Queen,
  King,
];

export default Card;
