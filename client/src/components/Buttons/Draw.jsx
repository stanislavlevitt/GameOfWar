import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { drawCards} from '../../utils/gamePlay';
import {updatePlayerHands} from "../../slices/gameBoard";
import "../../css/navbar.css"

const Draw = () =>{
  const dispatch = useDispatch();
  const players = useSelector(state => state.gameBoard.players);



  const startDraw = () => {
    console.log('starting')
    console.log('players', players)
    let playerHands = drawCards(players)
    dispatch(updatePlayerHands(playerHands))


  };

  return (
    <button className="controls-btn" onClick={startDraw} disabled={!players.length}>
      Draw
      </button>
  )
}

export default Draw
