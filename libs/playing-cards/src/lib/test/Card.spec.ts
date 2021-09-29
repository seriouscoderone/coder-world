import { Deck } from '../Deck'

describe("compareCard", () => {
  it('compare number cards', () => {
    const deck = Deck.getInstance()
    const twoOfHearts = deck.getCard("Two", "Hearts")
    const threeOfHearts = deck.getCard("Three", "Hearts")
    const lessThanComparison = twoOfHearts.compare(threeOfHearts)
    const greaterThanComparison = threeOfHearts.compare(twoOfHearts)
    const equalComparison = threeOfHearts.compare(threeOfHearts)
    expect(lessThanComparison).toBeLessThan(0)
    expect(greaterThanComparison).toBeGreaterThan(0)
    expect(equalComparison).toBe(0)
  })
})
