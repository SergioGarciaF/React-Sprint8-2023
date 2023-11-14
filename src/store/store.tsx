import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import expensesTodaySlice from "./Slices/expensesTodaySlice";
import totalExpensesSlice from "./Slices/totalExpensesSlice";
import graphicExpensesSlice from "./Slices/graphicExpensesSlice";
import variationExpensesSlice from "./Slices/variationExpensesSlice";

const store = configureStore({
  reducer: {
    totalExpenses: totalExpensesSlice,
    graphicExpenses: graphicExpensesSlice,
    expensesToday: expensesTodaySlice,
    variationExpenses: variationExpensesSlice
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
 

