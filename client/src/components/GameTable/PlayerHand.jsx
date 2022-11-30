import React from "react";
import "../../css/PlayerHand.css"
import Card from './Cards';

const PlayerHand = ({player}) =>{

  console.log('PlayerHand', player)
  let deck = []
  let hand = []
  if(player){
    deck  = player.cards.map( ( card, index ) => {
      const style = {transform: `translateY(-${index}px)`};
      return <Card key={index} value={card} shown={false} style={style} />
    });

     hand = player.hand.map( ( card, index ) => {
      const style = {transform: `translateY(${index * 70}px)`}
      return <Card key={index} shown={ index % 2 == 0 } value={card} style={ style } />
     });
  }


  return (
    <div className="player">
      <div className="cards">
        The Cards
        {deck}
      </div>
      <div className="current-hand">
        The Hand
        {hand}
      </div>
    </div>
  )
}

export default PlayerHand
