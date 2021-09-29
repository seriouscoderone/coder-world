import { CardName } from "./CardName";
import { Suit } from "./Suit";

export class Card {
  constructor(public name: CardName, public suit: Suit, public value: number) {}

  compare(card: Card) {
    return compareCard(this, card)
  }
}

export function compareCard(a: Card, b: Card) {
  return a.value - b.value
}