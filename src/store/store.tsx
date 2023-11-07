import { configureStore } from "@reduxjs/toolkit";
import expensesTodaySlice from "./Slices/expensesTodaySlice";
import totalExpensesSlice from "./Slices/totalExpensesSlice";
import graphicExpensesSlice from "./Slices/graphicExpensesSlice";
import variationExpensesSlice from "./Slices/variationExpensesSlice";

export default configureStore({
    reducer: {
      totalExpenses: totalExpensesSlice,
      graphicExpenses: graphicExpensesSlice,
      expensesToday: expensesTodaySlice,
      variationExpenses: variationExpensesSlice
    }
  })