import React from "react"
import "../../css/navbar.css"

const NewGame = () =>{
  const startGame = () => {
  };

  return (
     <button className="controls-btn" onClick={startGame}>
      New Game
      </button>
  )
}

export default NewGame
