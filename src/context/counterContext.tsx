import { createContext, FC, useContext, useState } from 'react';

type CounterContextType = {
  count: number;
  incrementCount: (amount?: number) => void;
  decrementCount: (amount?: number) => void;
};

const initialState: CounterContextType = {
  count: 0,
  incrementCount: () => {},
  decrementCount: () => {},
};

const CounterContext = createContext<CounterContextType>({ ...initialState });

export const CounterProvider: FC = ({ children }) => {
  const [count, setCount] = useState(0);

  const incrementCount = (amount = 1) =>
    setCount((prevCount) => prevCount + amount);
  const decrementCount = (amount = 1) =>
    setCount((prevCount) => prevCount - amount);

  return (
    <CounterContext.Provider value={{ count, incrementCount, decrementCount }}>
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
