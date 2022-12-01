import {buildDeck, shuffleDeck, deal} from "../../utils/deckBuilder"
import { describe, it, expect } from 'vitest';


describe('Describe DeckBuilder Methods method', () => {

  it('Can build deck when new game begins', () => {

    const deck = buildDeck()
    expect(deck.length).toBe(52)
  })

  it('Can Shuffle deck after it has been built', () => {
    const deck = buildDeck()
    const shuffle = shuffleDeck(deck)
    expect(shuffle.length).toBe(52)
    expect(shuffle[0]).not.toEqual(deck[0])
  })

  it('Can Deal shuffled deck', () => {
    const deck = shuffleDeck(buildDeck())
    const hands = deal(deck, 2)
    expect(hands.length).toBe(2)
    expect(hands[0].length).toBe(26)
    expect(hands[1].length).toBe(26)
  })

})
