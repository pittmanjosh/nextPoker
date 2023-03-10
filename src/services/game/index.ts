import { ActionPayload } from "@services/game/reducers";
import Game, { GameState } from "@models/Game";
import { Score } from "@models/Player";
import Card from "@classes/Card";
import { sortByPlayerOrder } from "@services/player";
import Hand from "@models/Hand";
import { sortCards } from "@services/card";

/** Deals card to Player */
export function dealCardToPlayer(hand: Hand, card: Card): Hand {
  if (hand.pocket.length < 2) {
    return { ...hand, pocket: [...hand.pocket, card] };
  } else {
    throw Error("Player already has 2 cards");
  }
}

/**
 * Resets the pocket cards of all Hands
 * @param hands
 * @returns empty Hand[]
 */
export function resetPlayerPockets(hands: Hand[]) {
  return hands.map((hand) => {
    return { ...hand, pocket: [] };
  });
}

// Players start with empty score
const initScore: Score = { wins: 0, ties: 0, losses: 0 };

/**
 * Adds new Player to Game
 * @param game of Game model
 * @param payload of ActionPayload
 * @returns Game
 */
export function addPlayers(game: Game, payload: ActionPayload) {
  if (payload.characters == undefined) {
    throw Error("Missing characters");
  }

  const addedPlayers = payload.characters.map((character, index) => {
    const isUser = index === 0;

    return { character, score: initScore, pocket: [], isUser };
  });

  return {
    ...game,
    players: addedPlayers,
  };
}

/**
 * Deals pocket to all players
 * @param game
 * @returns Game
 */
export function dealPocket(game: Game): Game {
  const deck = game.deck;

  const playersWithOneCard: Hand[] = game.hands.map((hand) => {
    const dealtCard: Card = deck.splice(0, 1)[0];
    return dealCardToPlayer(hand, dealtCard);
  });

  const unsortedHands: Hand[] = playersWithOneCard.map((player) => {
    const dealtCard: Card = deck.splice(0, 1)[0];
    return dealCardToPlayer(player, dealtCard);
  });

  const hands: Hand[] = unsortedHands.map((hand) => {
    return { ...hand, pocket: sortCards(hand.pocket) };
  });

  return { ...game, state: GameState.AWAITING_FLOP, hands, deck };
}

/**
 * deals flop
 * @param game
 * @returns Game
 */
export function dealFlop(game: Game) {
  const { deck } = game;
  const community = deck.splice(0, 3);

  return { ...game, deck, state: GameState.AWAITING_TURN, community };
}

export function dealTurn(game: Game) {
  const deck = game.deck;
  const community = game.community;
  if (community.length > 4) throw Error("Turn already dealt");
  const dealtCard = deck.shift();

  if (!dealtCard) throw Error("Deck has no cards");
  community.push(dealtCard);

  const state = GameState.AWAITING_RIVER;

  return { ...game, deck, state, community };
}

export function dealRiver(game: Game) {
  const deck = game.deck;
  const community = game.community;

  const dealtCard = deck.shift();
  if (!dealtCard) throw Error("Deck has no cards");
  community.push(dealtCard);

  const state = GameState.UPDATING_SCORE;

  return { ...game, deck, state, community };
}

export function assignPlayerOrder(game: Game) {
  if (game.players.length !== 6) return game;

  const order = [0, 1, 2, 3, 4, 5];

  const orderedPlayers = game.players.map((player) => {
    return {
      ...player,
      playerOrder: order.splice(Math.floor(order.length * Math.random()), 1)[0],
    };
  });

  return { ...game, players: sortByPlayerOrder(orderedPlayers) };
}
