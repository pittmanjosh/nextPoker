import createDeck from "@services/createDeck";
import Card from "@models/Card";
import Player from "@models/Player";
import Deck from "@models/Deck";

export default class Game {
  private players: Player[];
  private community: Card[];
  private deck: Deck;

  constructor() {
    this.players = [];
    this.community = [];
    this.deck = new Deck();
  }

  resetCards() {
    this.deck = new Deck();
    this.community = [];
  }

  getPlayers() {
    this.players;
  }

  dealPlayers() {
    if (this.deck.getLength() >= this.players.length) {
      this.players.forEach((player) => player.takeCard(this.deck.deal()));
    } else {
      throw "not enough cards";
    }
  }

  addPlayer(player: Player) {
    this.players.push(player);
    console.log(player.announce());
  }

  getDeck() {
    return this.deck;
  }
}
