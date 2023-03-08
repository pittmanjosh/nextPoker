import { ActionPayload } from "@services/reducers";
import Game from "@models/Game";
import { Score } from "@models/Player";
import Card from "@classes/Card";
import { dealCardToPlayer } from "@services/player";

// Players start with empty score
const initScore: Score = { wins: 0, ties: 0, losses: 0 };

/**
 * Adds new Player to Game
 * @param game of Game model
 * @param payload of ActionPayload
 * @returns Game
 */
export function addPlayer(game: Game, payload: ActionPayload) {
  if (payload.character == undefined) {
    throw Error("Missing character");
  } else if (game.players.length >= 6) {
    throw Error("Too many players");
  }

  return {
    ...game,
    players: [
      ...game.players,
      {
        character: payload.character,
        score: initScore,
        pocket: [],
        isUser: game.players.length == 0,
        playerId: game.players.length,
      },
    ],
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

  console.log(orderedPlayers);
  return { ...game, players: orderedPlayers };
}
