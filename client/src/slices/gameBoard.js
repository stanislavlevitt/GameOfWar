import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  gameCount: 0,
  autoName: 'Auto'
};

const gameSlice = createSlice({
  name: "gameBoard",
  initialState,
  reducers: {
    createNewGame: (state, action) => {
      console.log('createNewGame reducer')
      return {
        ...state,
        gameCount: state.gameCount + 1
      }
    },
    stopAutoPlay: (state, action) => {
      console.log('stopAutoPlay reducer')
      return {
        ...state,
        autoName: action.payload
      }
    },
  },
});

export const { createNewGame, stopAutoPlay } = gameSlice.actions

const { reducer } = gameSlice;
export default reducer;
