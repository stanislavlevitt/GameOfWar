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
    const playerHands = drawCards(players, 1)
    const  playerObject = makePlayerObject(playerHands[0], playerHands[1])
    dispatch(updatePlayerHands(playerObject))
    let isWar = false
    const hasWinner = determineWinner(playerHands);
    isWar = !hasWinner;
      if(hasWinner){
        handleWinner(hasWinner, playerHands)
      } else{
        handleWar()
      }
      dispatch(updateStatusInfo({
        rounds: rounds + 1,
        wars: wars + (isWar ? 1 : 0)
      }))
    }

    const handleWar = () =>{
      let inWar = true
      let cardDraws = 3
      let newPlayerHands = drawCards(players, cardDraws)
      let hasWinner
      while(inWar){
        let playerObject = makePlayerObject(newPlayerHands[0], newPlayerHands[1])
        dispatch(updatePlayerHands(playerObject))
        hasWinner = determineWinner(newPlayerHands);
        if(hasWinner) inWar = false
        cardDraws+=2
      }

      handleWinner(hasWinner, newPlayerHands)
    }

    const handleWinner = (winner, playerHands) =>{
      const cardsWon = gatherCardsWon(playerHands, winner)[0];
        const totalCards = [...winner.cards.slice(1), winner.cards[0], ...cardsWon]
        const winnerInfo = updateWinnerInfo(totalCards, playerHands, winner)
        const loserInfo = getLoserInfo(cardsWon, playerHands, winner)
        const playerObject = makePlayerObject(winnerInfo, loserInfo)
        dispatch(insertWonCards(playerObject))
    }


  return (
    <button className="controls-btn" onClick={startDraw} disabled={!players.length}>
      Draw
      </button>
  )
}

export default Draw
