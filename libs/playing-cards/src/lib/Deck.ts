import { Card } from "./Card";
import { CardName } from "./CardName";
import { Suit } from "./Suit";

export class Deck {
  public size: number
  constructor(private cards: Array<Card>) {
    this.size = cards.length
  }
  get(name: CardName, suit: Suit): Card {
    return this.cards.find(c => c.name === name && c.suit === suit)
  }
}