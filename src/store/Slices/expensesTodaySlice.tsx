import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    expensesToday : null
}

const expensesTodaySlice = createSlice({
    name: 'expensesToday',
    initialState,
    reducers: {
        addExpenses: (state, action) => {
            state.expensesToday = action.payload;
        }
    }
})

export const {addExpenses} = expensesTodaySlice.actions
export default expensesTodaySlice.reducer