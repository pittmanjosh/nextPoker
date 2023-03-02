import { Card } from "./Card";

class Player {
  private name: string;
  private avatar: string;
  private pocket: Card[];
  private wins: number;

  constructor(character: Character) {
    this.name = character.name;
    this.avatar = character.avatar;
    this.pocket = [];
    this.wins = 0;
  }

  announce() {
    console.log(`Now announcing... ${this.name}!`);
  }
}

export default Player;
