import { sortCards } from "@services/card";
import { Spades, Diamonds, Ace, Two, Three, Card } from "@classes/Card";

const aceOfSpades: Card = new Card({ suit: Spades, value: Ace });

const twoOfSpades: Card = new Card({ suit: Spades, value: Two });

const threeOfSpades: Card = new Card({ suit: Spades, value: Three });

const aceOfDiamonds: Card = new Card({ suit: Diamonds, value: Ace });

const twoOfDiamonds: Card = new Card({ suit: Diamonds, value: Two });

const threeOfDiamonds: Card = new Card({ suit: Diamonds, value: Three });

test("sortCards sorts cards by getPoints", () => {
  const sortedCards = sortCards([threeOfSpades, aceOfSpades, twoOfSpades]);
  expect(sortedCards[0].getPoints()).toBe(2);
  expect(sortedCards[1].getPoints()).toBe(3);
  expect(sortedCards[2].getPoints()).toBe(14);
});

test("sortCards sorts cards by suit", () => {
  const sortedCards = sortCards([threeOfDiamonds, threeOfSpades]);

  expect(sortedCards[0].getSuit()).toBe("spades");
  expect(sortedCards[1].getSuit()).toBe("diamonds");
});

test("sortCards sorts by value.points, then suit", () => {
  const sortedCards = sortCards([
    aceOfDiamonds,
    aceOfSpades,
    threeOfDiamonds,
    twoOfSpades,
    threeOfSpades,
    twoOfDiamonds,
  ]);
  expect(sortedCards[0].getSuit()).toBe("spades");
  expect(sortedCards[0].getPoints()).toBe(2);
  expect(sortedCards[1].getSuit()).toBe("diamonds");
  expect(sortedCards[1].getPoints()).toBe(2);
  expect(sortedCards[2].getSuit()).toBe("spades");
  expect(sortedCards[2].getPoints()).toBe(3);
  expect(sortedCards[3].getSuit()).toBe("diamonds");
  expect(sortedCards[3].getPoints()).toBe(3);
  expect(sortedCards[4].getSuit()).toBe("spades");
  expect(sortedCards[4].getPoints()).toBe(14);
  expect(sortedCards[5].getSuit()).toBe("diamonds");
  expect(sortedCards[5].getPoints()).toBe(14);
});
