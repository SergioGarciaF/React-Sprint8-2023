import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    monday: null,
    tuesday: null,
    wednesday: null,
    thursday: null,
    friday: null,
    saturday: null,
    sunday: null
}

 const graphicExpensesSlice = createSlice({
    name: 'graphics',
    initialState,
    reducers: {
        addGraphics: (state, action) => {
            const {monday, tuesday, wednesday, thursday, friday, saturday, sunday} = action.payload;
            state.monday = monday;
            state.tuesday = tuesday;
            state.wednesday = wednesday;
            state.thursday = thursday;
            state.friday = friday;
            state.saturday = saturday;
            state.sunday = sunday;
        }
    }
 })

 export const {addGraphics} = graphicExpensesSlice.actions
 export default graphicExpensesSlice.reducer