export function drawCards(players){
    return players.map((player)=> ({
      ...player,
      hand: draw(player.cards, 1)
    }))
}

export function determineWinner(players) {
  const p1 = cardValue(last(players[0].hand));
  const p2 = cardValue(last(players[1].hand));

  if (p1 == p2)
    return null;

  return (p1 > p2) ? players[0] : players[1];
}

 const cardValue = (card) =>{
  return parseInt(card, 10);
}

export function gatherCardsWon(players, winner) {
  return players
    .filter(player => player !== winner)
    .map(player => player.hand.splice(0));
}

const draw = (cards, numberOfCards = 1) => {
  const drawn = [];
  let clone = [...cards]
  while(numberOfCards) {
    drawn.push(clone.shift());
    numberOfCards--;
  }
  return drawn;
}
