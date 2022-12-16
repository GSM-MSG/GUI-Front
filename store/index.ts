import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import counterReducer, { CounterState } from './counter'

export type RootState = {
  counter: CounterState
}

const makeStore = () => {
  const store = configureStore({
    reducer: {
      counter: counterReducer,
    },
  })
  return store
}

const wrapper = createWrapper(makeStore, {
  debug: process.env.NODE_ENV === 'development',
})

export default wrapper
