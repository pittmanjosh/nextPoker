import { ActionPayload } from "@services/game/reducers";
import Game from "@models/Game";
import { Score } from "@models/Player";
import Card from "@classes/Card";
import { dealCardToPlayer, sortByPlayerOrder } from "@services/player";

// Initial Player attributes
const initPlayerAttributes = {
  score: { wins: 0, ties: 0, losses: 0 },
  pocket: [],
};
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

  const addedPlayers = payload.characters.map((character, playerId) => {
    const isUser = playerId === 0;

    return { character, score: initScore, pocket: [], isUser, playerId };
  });

  return {
    ...game,
    players: addedPlayers,
  };
}

/**
 * Deals 1 card to all players
 * @param game
 * @returns Game
 */
export function dealCard(game: Game) {
  const deck = game.deck;
  const players = game.players.map((player) => {
    const dealtCard: Card = deck.splice(0, 1)[0];
    return dealCardToPlayer(player, dealtCard);
  });

  return { ...game, players, deck };
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
