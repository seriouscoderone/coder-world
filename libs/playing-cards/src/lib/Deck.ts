import { Card } from "./Card";
import { CardName } from "./CardName";
import { Suit } from "./Suit";
import shuffle from 'lodash/shuffle'
 
export class Deck {
  public size: number

  private constructor(private cards: Array<Card>) {
    this.size = cards.length
  }

  static getInstance(acesLow = false): Deck {
    //https://www.deceptionary.com/aboutsuits.html
    const suitsInOrder: Array<Suit> = [
      "Spades", "Hearts", "Clubs", "Diamonds",
    ]
    const standardNameOrder: Array<CardName> = [
      'Two', 'Three', 'Four', 'Five',
      'Six', 'Seven', 'Eight', 'Nine',
      'Ten', 'Jack', 'Queen', 'King',
    ]
    const cardNamesInOrder: Array<CardName> = (acesLow) ? ["Ace", ...standardNameOrder] : [...standardNameOrder, "Ace"]

    const overallCardOrder = suitsInOrder.reduce<Array<[CardName, Suit]>>((order, name) => [
      ...order,
      ...cardNamesInOrder.map<[CardName, Suit]>(suit => [suit, name])
    ], [])

    const toCard = function ([name, suit]: [CardName, Suit], idx: number): Card {
      return new Card(name, suit, idx)
    }

    const deck: Deck = new Deck(overallCardOrder.map(toCard))
    return deck
  }

  shuffle() {
    return shuffle(this.cards)
  }

  getCard(name: CardName, suit: Suit): Card {
    return getCard(name, suit, this.cards)
  }
}

export function getCard(name: CardName, suit: Suit, cards: Array<Card>) {
  return cards.find(c => c.name === name && c.suit === suit)
}

export function shuffle(cards: Array<Card>) {
  return shuffle(cards)
}
