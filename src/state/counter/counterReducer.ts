import type { CounterAction } from './counterActions';

type CounterState = { count: number };

const defaultInitialState: CounterState = { count: 0 };

export function counterReducer(
  state = defaultInitialState,
  action: CounterAction,
) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + (action.payload ?? 1) };
    case 'DECREMENT':
      return { ...state, count: state.count - (action.payload ?? 1) };
    case 'SET':
      return { ...state, count: action.payload };
    case 'RESET':
      return { ...defaultInitialState };
    default:
      return state;
  }
}
