
import { Provider } from 'react-redux';
import { render, waitFor } from '@testing-library/react';
import { configureStore, CombinedState } from '@reduxjs/toolkit';
import totalExpensesReducer from '../store/Slices/totalExpensesSlice';
import WeekExpenses from '../components/WeekExpenses';

jest.mock('../store/Slices/totalExpensesSlice', () => ({
  fetchTotalExpenses: jest.fn().mockImplementation(() => async (dispatch: (arg0: { type: string; payload: number }) => void) => {
    dispatch({ type: 'totalExpenses/fetchTotalExpenses/fulfilled', payload: 1550 });
  }),
}));

describe('WeekExpenses', () => {
  it('fetches total expenses from the API and displays them', async () => {
    const store = configureStore({
      reducer: {
        totalExpenses: totalExpensesReducer,
      } as CombinedState<{ totalExpenses: any }>
    });

    const { getByText } = render(
      <Provider store={store}>
        <WeekExpenses />
      </Provider>
    );

    await waitFor(() => expect(getByText('1550 €')).toBeTruthy());
  });
});