import { getDeck } from '../getDeck'

describe("getDeck", () => {
  it('gives a complete deck', () => {
    const deck = getDeck()
    expect(deck.size).toBe(52)
  })
})