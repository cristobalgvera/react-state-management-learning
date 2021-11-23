import type { CounterAction } from './counterActions';

type CounterState = { count: number };

const defaultInitialState: CounterState = { count: 0 };

export function counterReducer(
  state = defaultInitialState,
  action: CounterAction,
) {
  switch (action.type) {
    case 'counter/incrementCount':
      return { ...state, count: state.count + (action.payload ?? 1) };
    case 'counter/decrementCount':
      return { ...state, count: state.count - (action.payload ?? 1) };
    case 'counter/setCount':
      return { ...state, count: action.payload };
    case 'counter/resetCount':
      return { ...defaultInitialState };
    default:
      return state;
  }
}
