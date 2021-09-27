import { compareCard } from '../compareCard'
import { getDeck } from '../getDeck'

describe("compareCard", () => {
  it('compare number cards', () => {
    const deck = getDeck()
    const twoOfHearts = deck.get("Two", "Hearts")
    const threeOfHearts = deck.get("Three", "Hearts")
    const lessThanComparison = compareCard(twoOfHearts, threeOfHearts)
    const greaterThanComparison = compareCard(threeOfHearts, twoOfHearts)
    const equalComparison = compareCard(threeOfHearts, threeOfHearts)
    expect(lessThanComparison).toBeLessThan(0)
    expect(greaterThanComparison).toBeGreaterThan(0)
    expect(equalComparison).toBe(0)
  })
})
