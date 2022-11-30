import { configureStore } from '@reduxjs/toolkit'
import gameReducer from './slices/gameBoard';

const reducer = {
  gameBoard: gameReducer
}

const store = configureStore({
  reducer: reducer,
  devTools: true,
})

export default store;
