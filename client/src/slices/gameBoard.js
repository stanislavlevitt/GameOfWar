import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  rounds: 0,
  wars: 0,
  winner: null,
  players : []
};

const gameSlice = createSlice({
  name: "gameBoard",
  initialState,
  reducers: {
    createNewGame: (state, action) => {
      return {
        ...state,
        rounds: action.payload.rounds,
        wars: action.payload.wars,
        winner: action.payload.winner,
        players: action.payload.players,
      }
    },
    insertWonCards: (state, action) => {
      return {
        ...state,
        players: action.payload.players,
      }
    },
    updatePlayerHands: (state, action) => {
      return {
        ...state,
        players: action.payload,
      }
    },
  },
});

export const { createNewGame, insertWonCards, updatePlayerHands } = gameSlice.actions

const { reducer } = gameSlice;
export default reducer;
