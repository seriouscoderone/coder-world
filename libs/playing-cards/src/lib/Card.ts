import { CardName } from "./CardName";
import { Suit } from "./Suit";

export interface Card {
  suit: Suit
  value: number
  name: CardName
}