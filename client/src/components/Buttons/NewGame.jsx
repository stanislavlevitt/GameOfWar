import React from "react"
import { useDispatch } from "react-redux";
import {createNewGame} from "../../slices/gameBoard";
import { buildDeck, shuffleDeck, deal} from '../../utils/deckBuilder';
import "../../css/navbar.css"

const NewGame = () =>{
  const dispatch = useDispatch();

  const startGame = () => {

    const cards = shuffleDeck(buildDeck());
    const hands = deal(cards, 2);

    const newState = {
      rounds: 0,
      wars: 0,
      winner: null,
      players: [
        {name: 'First Player', cards:['8H'], hand: []},
        {name: 'Second Player', cards:hands[1], hand: []}
      ]
    }
    dispatch(createNewGame(newState))
  };

  return (
     <button className="controls-btn" onClick={startGame}>
      New Game
      </button>
  )
}

export default NewGame
