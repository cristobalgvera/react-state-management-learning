import { createContext, FC, useContext, useReducer } from 'react';

type CounterContextType = {
  state: CounterStateType;
  incrementCount: (amount?: number) => void;
  decrementCount: (amount?: number) => void;
  resetCount: () => void;
};

type CounterStateType = {
  count: number;
};

type IncrementAction = { type: 'increment'; amount?: number };
type DecrementAction = { type: 'decrement'; amount?: number };
type ResetAction = { type: 'reset' };

type CounterActionType = IncrementAction | DecrementAction | ResetAction;

const defaultInitialState: CounterStateType = {
  count: 0,
};

const counterReducer = (state: CounterStateType, action: CounterActionType) => {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + (action.amount ?? 1) };
    case 'decrement':
      return { ...state, count: state.count - (action.amount ?? 1) };
    case 'reset':
      return { ...defaultInitialState };
    default:
      return state;
  }
};

const CounterContext = createContext<CounterContextType>({
  state: { ...defaultInitialState },
  decrementCount: () => {},
  incrementCount: () => {},
  resetCount: () => {},
});

export const CounterProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(counterReducer, defaultInitialState);

  const incrementCount = (amount?: number) =>
    dispatch({ type: 'increment', amount });

  const decrementCount = (amount?: number) =>
    dispatch({ type: 'decrement', amount });

  const resetCount = () => dispatch({ type: 'reset' });

  return (
    <CounterContext.Provider
      value={{ state, incrementCount, decrementCount, resetCount }}
    >
      {children}
    </CounterContext.Provider>
  );
};

const useCounter = () => {
  const counterContext = useContext(CounterContext);

  if (!counterContext)
    throw new Error('useCounter must be used within a CounterProvider');

  return counterContext;
};

export const useCounterAction = () => {
  const { incrementCount, decrementCount, resetCount } = useCounter();
  return { incrementCount, decrementCount, resetCount };
};

export function useCounterState<T>(
  selector: (state: CounterStateType) => T,
): T {
  const { state } = useCounter();
  return selector(state);
}
