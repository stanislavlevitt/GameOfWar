import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { determineWinner, gatherCardsWon, drawCards, getLoserInfo, updateWinnerInfo, isGameOver} from '../../utils/gamePlay';
import {makePlayerObject, } from '../../utils/buildPlayers';
import {insertWonCards, updatePlayerHands, updateStatusInfo, updateWinnerStatus} from "../../slices/gameBoard";
import "../../css/navbar.css"

const Draw = () =>{
  const dispatch = useDispatch();
  const players = useSelector(state => state.gameBoard.players);
  const rounds = useSelector(state => state.gameBoard.rounds);
  const wars = useSelector(state => state.gameBoard.wars);
  const winner = useSelector(state => state.gameBoard.winner);

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

        if (isGameOver(loserInfo)) {
          const {players} = makePlayerObject(winnerInfo, loserInfo, true)
          dispatch(updateWinnerStatus({winner: winnerInfo.name, players}))
        }
    }

    const shouldDisable = !players.length || winner


  return (
    <button className="controls-btn" onClick={startDraw} disabled={shouldDisable}>
      Draw
      </button>
  )
}

export default Draw
