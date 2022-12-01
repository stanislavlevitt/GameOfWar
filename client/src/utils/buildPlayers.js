
export function makePlayerObject(player1, player2, gameOver = false) {
  return {
    players:[
      {name:player1.name, cards: player1.cards, hand: gameOver ? [] : player1.hand},
      {name:player2.name, cards: player2.cards, hand: gameOver ? [] :player2.hand }
    ]
  }
}

