import { createContext, FC, useContext, useReducer } from 'react';

type CounterContextType = {
  state: CounterStateType;
  increment: (amount?: number) => void;
  decrement: (amount?: number) => void;
  reset: () => void;
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
  decrement: () => {},
  increment: () => {},
  reset: () => {},
});

export const CounterProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(counterReducer, defaultInitialState);

  const increment = (amount?: number) =>
    dispatch({ type: 'increment', amount });

  const decrement = (amount?: number) =>
    dispatch({ type: 'decrement', amount });

  const reset = () => dispatch({ type: 'reset' });

  return (
    <CounterContext.Provider value={{ state, increment, decrement, reset }}>
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
  const { increment, decrement, reset } = useCounter();
  return { increment, decrement, reset };
};

export function useCounterState<T>(
  selector: (state: CounterStateType) => T,
): T {
  const { state } = useCounter();
  return selector(state);
}