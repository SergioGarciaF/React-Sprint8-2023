import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    variationExpenses : null
}

const variationExpensesSlice = createSlice({
    name: 'variationExpenses',
    initialState,
    reducers: {
        addVariation: (state, action) => {
            state.variationExpenses = action.payload;
        }
    }
})

export const {addVariation} = variationExpensesSlice.actions
export default variationExpensesSlice.reducer