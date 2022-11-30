import { shuffle } from "lodash";

export function buildDeck() {
  //Spades, Diamonds, Clubs, Hearts
  const suits = ['S','D','C','H'];
  let deck = []

  suits.forEach(suit => {
    for (let i=2; i<15; i++) {
      deck.push(i+suit);
    }
  });
  return deck;
}

export function shuffleDeck(cards = []) {
  return shuffle(cards);
}

export function deal(cards = [], numberOfPlayers = 2) {
  let hands = [];
  let player = 0;

  while (cards.length) {
    if (!hands[player]) hands[player] = [];
    hands[player].push(cards.pop());
    if ( ++player > numberOfPlayers-1) player = 0;
  }

  return hands;
}
