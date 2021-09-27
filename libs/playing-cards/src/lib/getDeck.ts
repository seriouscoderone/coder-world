import { Card } from "./Card";
import { CardName } from "./CardName";
import { Deck } from "./Deck";
import { Suit } from "./Suit";

export function getDeck(acesLow = false): Deck {
  //https://www.deceptionary.com/aboutsuits.html
  const suitsInOrder: Array<Suit> = [
    "Spades", "Hearts", "Clubs", "Diamonds",
  ]
  const standardNameOrder: Array<CardName> = [
    'Two', 'Three', 'Four', 'Five',
    'Six', 'Seven', 'Eight', 'Nine',
    'Ten', 'Jack', 'Queen', 'King',
  ]
  const cardNamesInOrder = (acesLow) ? ["Ace", ...standardNameOrder] : [...standardNameOrder, "Ace"]

  const overallCardOrder = cardNamesInOrder.reduce((order, name) => [
    ...order,
    ...suitsInOrder.map(suit => [name, suit])
  ], [])

  const toCard = ([name, suit], idx): Card => ({ suit, name, value: idx })

  const deck: Deck = new Deck(overallCardOrder.map(toCard))
  return deck
}

