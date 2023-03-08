import Card from "@classes/Card";
import Player from "@models/Player";

/** Deals card to Player */
export function dealCardToPlayer(player: Player, card: Card) {
  if (player.pocket.length < 2) {
    return { ...player, pocket: [...player.pocket, card] };
  } else {
    throw Error("Player already has 2 cards");
  }
}

/**
 * Resets the pocket cards of all Players
 * @param players
 * @returns Player[]
 */
export function resetPlayerPockets(players: Player[]) {
  return players.map((player) => {
    return { ...player, pocket: [] };
  });
}

export function findPlayerByIdAndModify(
  players: Player[],
  id: number,
  modification: (player: Player) => Player
) {
  if (!players.find((x) => x.playerId === id))
    throw Error("No players with that id exist");

  return players.map((x) => {
    if (x.playerId === id) {
      return x;
    } else {
      return modification(x);
    }
  });
}
