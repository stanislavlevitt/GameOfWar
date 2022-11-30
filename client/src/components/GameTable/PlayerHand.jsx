import React from "react";
import "../../css/PlayerHand.css"
import Card from './Cards';

const PlayerHand = ({player}) =>{

  let deck = []
  if(player){
    deck  = player.cards.map( ( card, index ) => {
      const style = {transform: `translateY(-${index}px)`};
      return <Card key={index} value={card} shown={false} style={style} />
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
      </div>
    </div>
  )
}

export default PlayerHand
