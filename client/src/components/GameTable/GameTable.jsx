import React from "react";
import { useSelector } from "react-redux";
import PlayerHand from "./PlayerHand";
import "../../css/gametable.css"

const GameTable = () =>{
  const round = useSelector(state => state.gameBoard.rounds);
  const wars = useSelector(state => state.gameBoard.wars);
  const players = useSelector(state => state.gameBoard.players);
  const winner = useSelector(state => state.gameBoard.winner);

  return (
      <div className="gametable">The Table
        <div className="players">
          <PlayerHand />
          <PlayerHand />
        </div>
        <div className="status">
          {winner ? (`Game Over. ${winner} wins.`) : ('')}
        { round } rounds ({wars} wars)
            {players ?(
              players
              .map((player, index) => (
              <p key={index}>{`Player: ${player.name} |  Deck size: ${player.cards.length}`}</p>))) : ('')
            }
          </div>
      </div>
  )
}

export default GameTable
