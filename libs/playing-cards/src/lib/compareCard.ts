import { Card } from "./Card";

export function compareCard(a: Card, b: Card) {
  return a.value - b.value
}