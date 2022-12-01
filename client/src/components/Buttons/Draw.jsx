import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { determineWinner, gatherCardsWon, drawCards, getLoserInfo, updateWinnerInfo} from '../../utils/gamePlay';
import {insertWonCards, updatePlayerHands, updateStatusInfo} from "../../slices/gameBoard";
import "../../css/navbar.css"

const Draw = () =>{
  const dispatch = useDispatch();
  const players = useSelector(state => state.gameBoard.players);
  const rounds = useSelector(state => state.gameBoard.rounds);
  const wars = useSelector(state => state.gameBoard.wars);



  const makePlayerObject = (player1, player2) =>{
    return {
      players:[
        {name:player1.name, cards: player1.cards, hand:player1.hand},
        {name:player2.name, cards: player2.cards, hand:player2.hand }
      ]
    }
  }

  const startDraw = () => {
    let playerHands = drawCards(players)
    let playerObject = makePlayerObject(playerHands[0], playerHands[1])
    dispatch(updatePlayerHands(playerObject))
    let isWar = false
    const hasWinner = determineWinner(playerHands);
    isWar = !hasWinner;
      if(hasWinner){
        const cardsWon = gatherCardsWon(playerHands, hasWinner)[0];
        const totalCards = [...hasWinner.cards.slice(1,-1), hasWinner.cards[0], ...cardsWon]
        const winnerInfo = updateWinnerInfo(totalCards, playerHands, hasWinner)
        const loserInfo = getLoserInfo(cardsWon, playerHands, hasWinner)
        playerObject = makePlayerObject(winnerInfo, loserInfo)
        dispatch(insertWonCards(playerObject))
      }
      dispatch(updateStatusInfo({
        rounds: rounds + 1,
        wars: wars + (isWar ? 1 : 0)
      }))
    }


  return (
    <button className="controls-btn" onClick={startDraw} disabled={!players.length}>
      Draw
      </button>
  )
}

export default Draw
