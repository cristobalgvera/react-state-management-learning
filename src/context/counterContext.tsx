import { createContext, FC, useContext, useState } from 'react';

type CounterContextType = {
  count: number;
  increment: (amount?: number) => void;
  decrement: (amount?: number) => void;
};

const initialState: CounterContextType = {
  count: 0,
  increment: () => {},
  decrement: () => {},
};

const CounterContext = createContext<CounterContextType>({ ...initialState });

export const CounterProvider: FC = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = (amount = 1) => setCount((prevCount) => prevCount + amount);
  const decrement = (amount = 1) => setCount((prevCount) => prevCount - amount);

  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCounter = () => {
  const counterContext = useContext(CounterContext);

  if (!counterContext)
    throw new Error('useCounter must be used within a CounterProvider');

  return counterContext;
};
