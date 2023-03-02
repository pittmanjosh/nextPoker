import Card from "@models/Card";
import Character from "@models/Character";

export interface score {
  wins: number;
  ties: number;
  losses: number;
}

export class Player {
  private name: string;
  private avatar: string;
  private pocket: Card[];
  private wins: number;
  private losses: number;
  private ties: number;
  private isUser: boolean;

  constructor(character: Character, isUser: boolean) {
    this.name = character.name;
    this.avatar = character.avatar;
    this.pocket = [];
    this.wins = 0;
    this.losses = 0;
    this.ties = 0;
    this.isUser = isUser;
  }

  announce() {
    console.log(`Now announcing... ${this.name}!`);
  }

  getIsUser() {
    this.isUser;
  }

  winRound() {
    this.wins += 1;
  }

  loseRound() {
    this.losses += 1;
  }

  tieRound() {
    this.ties += 1;
  }

  getScore(): score {
    return {
      wins: this.wins,
      ties: this.ties,
      losses: this.losses,
    };
  }

  getPocket() {
    return this.pocket;
  }

  takeCard(card: Card) {
    if (this.pocket.length < 2) {
      this.pocket.push(card);
    } else {
      throw `Error: ${this.name} Over-Dealt!`;
    }
  }
}

export default Player;
