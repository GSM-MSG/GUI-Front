import { AnyAction, createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'

export interface CounterState {
  count: number
}

const initialState: CounterState = {
  count: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increament: (state) => {
      state.count += 1
    },
    decreament: (state) => {
      state.count -= 1
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action: AnyAction) => {
      state = action.payload.counter
      return state
    })
  },
})

export const { decreament, increament } = counterSlice.actions

export default counterSlice.reducer
