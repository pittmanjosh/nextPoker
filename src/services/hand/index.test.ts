import {
  Spades,
  Diamonds,
  Clubs,
  Ace,
  Two,
  Three,
  Four,
  Five,
  Card,
  Six,
} from "@classes/Card";
import { sortCards } from "@services/card";
import {
  permutateCards,
  evaluateStraight,
  evaluateWheel,
} from "@services/hand";
import { SP } from "next/dist/shared/lib/utils";

const aceOfSpades = new Card({ suit: Spades, value: Ace });

const twoOfSpades = new Card({ suit: Spades, value: Two });

const threeOfSpades = new Card({ suit: Spades, value: Three });

const fourOfSpades = new Card({ suit: Spades, value: Four });

const fiveOfSpades = new Card({ suit: Spades, value: Five });

const sixOfSpades = new Card({ suit: Spades, value: Six });

const aceOfDiamonds = new Card({ suit: Diamonds, value: Ace });

const twoOfDiamonds = new Card({ suit: Diamonds, value: Two });

const threeOfDiamonds = new Card({ suit: Diamonds, value: Three });

const aceOfClubs = new Card({ suit: Clubs, value: Ace });

const flushWheelOfSpades = [
  aceOfSpades,
  fiveOfSpades,
  fourOfSpades,
  threeOfSpades,
  twoOfSpades,
];

const sixTwoStraight = [
  sixOfSpades,
  fiveOfSpades,
  fourOfSpades,
  threeOfSpades,
  twoOfSpades,
];

describe("permutateCards", () => {
  const permutatedHands = permutateCards(
    [threeOfSpades, aceOfSpades],
    [twoOfSpades, aceOfDiamonds, twoOfDiamonds, threeOfDiamonds, aceOfClubs]
  );

  test("returns card arrays that are 5 cards long", () => {
    expect(permutatedHands.every((hand) => hand.length === 5)).toBe(true);
  });

  test("returns 6 different card arrays if given 6 cards", () => {
    expect(
      permutateCards(
        [aceOfClubs, aceOfDiamonds],
        [twoOfDiamonds, twoOfSpades, threeOfDiamonds, threeOfSpades]
      ).length
    ).toBe(6);
  });

  test("returns 42 different card arrays if given 7 cards", () => {
    expect(
      permutateCards(
        [aceOfClubs, aceOfDiamonds],
        [
          twoOfDiamonds,
          twoOfSpades,
          threeOfDiamonds,
          threeOfSpades,
          aceOfSpades,
        ]
      ).length
    ).toBe(42);
  });
});

describe("evaluateStraight", () => {
  test("wheel returns false", () => {
    expect(evaluateStraight(flushWheelOfSpades)).toBe(false);
  });

  test("straight returns true", () => {
    expect(evaluateStraight(sixTwoStraight)).toBe(true);
  });
});

describe("evaluateWheel", () => {
  test("typical straight returns false", () => {
    expect(evaluateWheel(sixTwoStraight)).toBe(false);
  });

  test("wheel returns true", () => {
    expect(evaluateWheel(flushWheelOfSpades)).toBe(true);
  });
});
