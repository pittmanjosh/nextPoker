import createDeck from "@services/createDeck";
import { Card } from "./Card";
import Player from "./Player";

export default class Game {
  players: Player[];
  community: Card[];
  deck: Card[];

  constructor() {
    this.players = [];
    this.community = [];
    this.deck = createDeck();
  }

  resetCards() {
    this.deck = createDeck();
    this.community = [];
  }

  addPlayer(player: Player) {
    this.players.push(player);
    console.log(player.announce());
  }
}
