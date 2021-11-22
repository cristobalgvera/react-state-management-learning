import { useCounter } from '../../context/counterContext';
import { Button } from '../UI/Button';

export const CountActions = () => {
  const { increment, decrement } = useCounter();
  return (
    <div className="flex gap-x-4 mt-4">
      <Button onClick={() => decrement()}>-</Button>
      <Button onClick={() => increment()}>+</Button>
    </div>
  );
};
