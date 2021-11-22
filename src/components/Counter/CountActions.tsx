import { useCounter } from '../../context/counterContext';
import { Button } from '../UI/Button';

export const CountActions = () => {
  const { incrementCount, decrementCount } = useCounter();
  return (
    <div className="flex gap-x-4 mt-4">
      <Button onClick={() => decrementCount()}>-</Button>
      <Button onClick={() => incrementCount()}>+</Button>
    </div>
  );
};
