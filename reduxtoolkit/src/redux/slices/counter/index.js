import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    initialState: {
        value: 0
    },
    name: 'counter',
    reducers: {
        increment: (state, { number = 1 }) => {
            return {
                ...state,
                value: state.value + number
            }

        },

        decrement: (state) => {
            return {
                ...state,
                value: state.value - 1
            }
        },

        incrementbyAmount: (state, action) => {
            return {
                ...state,
                value: state.value + action.payload
            }


        }
    }


})

export const { increment, decrement, incrementbyAmount } = counterSlice.actions
export default counterSlice.reducer