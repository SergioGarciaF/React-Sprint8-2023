import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    totalExpenses : null
}

const totalExpensesSlice = createSlice({
    name: 'expenses',
    initialState,
    reducers: {
        addTotal: (state, action) => {
            state.totalExpenses = action.payload;
        }
    }
})

export const {addTotal} = totalExpensesSlice.actions
export default totalExpensesSlice.reducer
