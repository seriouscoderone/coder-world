import { Deck } from '../Deck'

describe("Deck", () => {
  it('can get instance', () => {
    const deck = Deck.getInstance()
    expect(deck.size).toBe(52)
  })
})