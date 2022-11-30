import React from "react";
import PlayerHand from "./PlayerHand";
import "../../css/gametable.css"

const GameTable = () =>{

  return (
      <div className="gametable">The Table
        <div className="players">
          <PlayerHand />
          <PlayerHand />
        </div>
        <div className="status">
            Round Status
            War Status
            Hand Status
          </div>
      </div>
  )
}

export default GameTable
