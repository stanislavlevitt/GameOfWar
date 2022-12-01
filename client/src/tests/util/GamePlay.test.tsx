import {drawCards, determineWinner, gatherCardsWon, getLoserInfo, updateWinnerInfo, isGameOver} from "../../utils/gamePlay"
import { describe, it, expect } from 'vitest';


describe('Describe gamePlay Methods method', () => {

    const players = [
    {name: "first", cards: ['8D', '11D', '5C', '12D', '14S', '14D'], hand:[]},
    {name: "second", cards: ['7D', '10D', '4C', '11D', '13S', '13D'], hand:[]}
  ]

  const Warplayers = [
    {name: "first", cards: ['8D', '11D', '4C', '12D', '14S', '14D'], hand:[]},
    {name: "second", cards: ['8H', '10D', '5C', '11D', '13S', '13D'], hand:[]}
  ]

  it('Can draw cards from player decks', () => {

    const hands = drawCards(players, 1)
    //First Player
    expect(hands[0].hand.length).toBe(1)
    expect(hands[0].hand[0]).toEqual(players[0].cards[0])

    //Second Player
    expect(hands[1].hand.length).toBe(1)
    expect(hands[1].hand[0]).toEqual(players[1].cards[0])
  })

  it('Can determine winner', () => {

    const hands = drawCards(players, 1)
    const winner = determineWinner(hands)
    expect(winner).not.toBeNull();
  })

  it('No winner if cards are same value', () => {
    const hands = drawCards(Warplayers, 1)
    const winner = determineWinner(hands)
    expect(winner).toBeNull();
  })

  it('Can draw cards from player decks during war', () => {

    const hands = drawCards(Warplayers, 3)
    //First Player
    expect(hands[0].hand.length).toBe(3)
    expect(hands[0].hand.slice(0,3)).toEqual(Warplayers[0].cards.slice(0,3))

    //Second Player
    expect(hands[1].hand.length).toBe(3)
    expect(hands[1].hand.slice(0,3)).toEqual(Warplayers[1].cards.slice(0,3))
  })

  it('Can get winner after playing war', () => {
    const hands = drawCards(Warplayers, 3)
    const winner = determineWinner(hands)
    expect(winner).not.toBeNull();
  })

  it('Can get get winner cards without war played', () => {
    const hands = drawCards(players, 1)
    const winner = determineWinner(hands)
    const cardsWon = gatherCardsWon(hands, winner)[0];
    expect(cardsWon.length).toBe(1)
    const loser = players[1]
    expect(cardsWon[0]).toEqual(loser.cards[0])
  })

  it('Can get get winner cards when war played', () => {
    const hands = drawCards(Warplayers, 3)
    const winner = determineWinner(hands)
    const cardsWon = gatherCardsWon(hands, winner)[0];
    expect(cardsWon.length).toBe(3)
    const loser = Warplayers[0]
    expect(cardsWon.slice(0,3)).toEqual(loser.cards.slice(0,3))
  })

  it('Can update winnerInfo after no war', () => {
    const hands = drawCards(players, 1)
    const winner = determineWinner(hands)
    const cardsWon = gatherCardsWon(hands, winner)[0];
    const totalCards = [...winner.cards.slice(1), winner.cards[0], ...cardsWon]
    const winnerInfo = updateWinnerInfo(totalCards, hands, winner)
    expect(winnerInfo.cards).toEqual(expect.arrayContaining(cardsWon));
    expect(winnerInfo.cards.length).toBeGreaterThan(players[0].cards.length);
  })

  it('Can update winnerInfo after war', () => {
    const hands = drawCards(Warplayers, 3)
    const winner = determineWinner(hands)
    const cardsWon = gatherCardsWon(hands, winner)[0];
    const totalCards = [...winner.cards.slice(1), winner.cards[0], ...cardsWon]
    const winnerInfo = updateWinnerInfo(totalCards, hands, winner)
    expect(winnerInfo.cards).toEqual(expect.arrayContaining(cardsWon));
    expect(winnerInfo.cards.length).toBeGreaterThan(Warplayers[1].cards.length);
  })

  it('Can update loserInfo after no war', () => {
    const hands = drawCards(players, 1)
    const winner = determineWinner(hands)
    const cardsWon = gatherCardsWon(hands, winner)[0];
    const loserInfo = getLoserInfo(cardsWon, hands, winner)
    expect(cardsWon).toEqual(expect.not.arrayContaining(loserInfo.cards));
    expect(players[1].cards.length).toBeGreaterThan(loserInfo.cards.length);
  })

  it('Can update loserInfo after war', () => {
    const hands = drawCards(Warplayers, 3)
    const winner = determineWinner(hands)
    const cardsWon = gatherCardsWon(hands, winner)[0];
    const loserInfo = getLoserInfo(cardsWon, hands, winner)
    expect(cardsWon).toEqual(expect.not.arrayContaining(loserInfo.cards));
    expect(Warplayers[0].cards.length).toBeGreaterThan(loserInfo.cards.length);
  })

  it('Game over is false', () => {
    const loserInfo = {name: "loser", cards: ['8D'], hand:['7H']}
    expect(isGameOver(loserInfo)).toBe(false)
  })

  it('Game over is true', () => {
    const loserInfo = {name: "loser", cards: [], hand:['8D']}
    expect(isGameOver(loserInfo)).toBe(true)
  })


})
