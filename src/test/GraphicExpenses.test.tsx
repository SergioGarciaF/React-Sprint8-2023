import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../store/store';
import GraphicExpenses from '../components/GraphicExpenses';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
  useDispatch: () => jest.fn(),
}));

describe('GraphicExpenses', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render the component', () => {
    render(
      <Provider store={store}>
        <GraphicExpenses />
      </Provider>
    );

    expect(screen.getByRole('img')).toBeTruthy();
  });
});
