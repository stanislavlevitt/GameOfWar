import React from "react";
import "../../css/PlayerHand.css"
import Card from './Cards';

const PlayerHand = ({player}) =>{

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
        {deck}
      </div>
      {player ? (
        <div>
          <p>{player.name}'s Deck</p>
        </div>
      ) : ('')}
      <div className="current-hand">
        {hand}
      </div>
    </div>
  )
}

export default PlayerHand
