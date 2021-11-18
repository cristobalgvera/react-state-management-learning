import { useState } from 'react';
import { Button } from '../UI/Button';

interface CounterProps {
  initialCount?: number;
}

/**
 * Local state can be defined in three ways:
 * 1. Declaring a local state variable as usual (e.g. `const variable = "value"`)
 * 2. Declaring a variable using `useState` hook (e.g. `const [variable, setVariable] = useState("value")`)
 * 3. Declaring a variable using `useReducer` hook (e.g. `const [variable, dispatch] = useReducer(reducer, "value")`)
 */
export const LocalStateCounter = ({ initialCount = 0 }: CounterProps) => {
  // Local state
  const [count, setCount] = useState(initialCount);

  const handleIncrement = () => setCount((prevCount) => prevCount + 1);
  const handleDecrement = () => setCount((prevCount) => prevCount - 1);

  return (
    <div className="flex flex-col justify-center items-center gap-y-8">
      <p className="text-5xl">
        Count: <span className="font-bold">{count}</span>
      </p>
      <div className="flex gap-x-4 py-2 px-4">
        <Button onClick={handleDecrement}>-</Button>
        <Button onClick={handleIncrement}>+</Button>
      </div>
    </div>
  );
};
