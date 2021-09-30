import { Deck } from '../Deck'

describe("Deck", () => {
  it('can get instance', () => {
    const deck = Deck.getInstance()
    console.log(deck)
    expect(deck.size).toBe(52)
  })
})