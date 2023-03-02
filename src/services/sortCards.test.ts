import sortCards from "./sortCards";
import { Spades, Diamonds, Ace, Two, Three, Card } from "../models/Card";

const aceOfSpades: Card = { suit: Spades, value: Ace };

const twoOfSpades: Card = { suit: Spades, value: Two };

const threeOfSpades: Card = { suit: Spades, value: Three };

const aceOfDiamonds: Card = { suit: Diamonds, value: Ace };

const twoOfDiamonds: Card = { suit: Diamonds, value: Two };

const threeOfDiamonds: Card = { suit: Diamonds, value: Three };

test("sortCards sorts cards by value.points", () => {
  const sortedCards = sortCards([threeOfSpades, aceOfSpades, twoOfSpades]);
  expect(sortedCards[0].value.points).toBe(2);
  expect(sortedCards[1].value.points).toBe(3);
  expect(sortedCards[2].value.points).toBe(14);
});

test("sortCards sorts cards by suit", () => {
  const sortedCards = sortCards([threeOfDiamonds, threeOfSpades]);
  expect(sortedCards[0].suit.name).toBe("spades");
  expect(sortedCards[1].suit.name).toBe("diamonds");
});
