import React from "react";
import { useSelector } from "react-redux";
import PlayerHand from "./PlayerHand";
import "../../css/gametable.css"

const GameTable = () =>{
  const round = useSelector(state => state.gameBoard.rounds);
  const wars = useSelector(state => state.gameBoard.wars);
  const players = useSelector(state => state.gameBoard.players);
  const winner = useSelector(state => state.gameBoard.winner);

  const firstPlayer = players.filter(player =>player.name ==='First Player')[0]
  const secondPlayer = players.filter(player =>player.name ==='Second Player')[0]

  return (
      <div className="gametable">
        <div className="players">
          <PlayerHand player={firstPlayer}/>
          <PlayerHand player={secondPlayer}/>
        </div>
        <div className="status">
          {winner ? (`Game Over. ${winner} wins.`) : ('')}
        </div>
        <br />
        <div className="status">
        { round } rounds ({wars} wars)
        {firstPlayer ? (<p>Player: {firstPlayer.name} |  Deck size: {firstPlayer.cards.length}</p>) : ('')}
        {secondPlayer ? (<p>Player: {secondPlayer.name} |  Deck size: {secondPlayer.cards.length}</p>) : ('')}
          </div>
      </div>
  )
}

export default GameTable
