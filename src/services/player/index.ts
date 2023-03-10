import Player from "@models/Player";

export function sortByPlayerOrder(players: Player[]) {
  if (Boolean(players.find((player) => player.playerOrder === undefined)))
    return players;

  return players.sort((a, b) => {
    return Number(a.playerOrder) - Number(b.playerOrder);
  });
}
