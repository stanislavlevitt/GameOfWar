import React from "react"
import { useDispatch, useSelector } from "react-redux";
import {createNewGame, stopAutoPlay} from "../../slices/gameBoard";
import "../../css/navbar.css"

const NewGame = () =>{
  const count = useSelector(state => state.gameBoard.gameCount);
  const name = useSelector(state => state.gameBoard.autoName);
  const dispatch = useDispatch();

  const startGame = () => {
    let GameState = {}
    console.log('clicked startGame')
    dispatch(createNewGame())
    dispatch(stopAutoPlay('stas'))

  };

  return (
     <button className="controls-btn" onClick={startGame}>
      New Game
      {count}
      {name}
      </button>
  )
}

export default NewGame
