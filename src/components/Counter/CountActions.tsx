import { useCounterAction } from '../../context/counterContext';
import { Button } from '../UI/Button';

export const CountActions = () => {
  const { decrementCount, incrementCount } = useCounterAction();
  return (
    <div className="flex gap-x-4 mt-4">
      <Button onClick={() => decrementCount()}>-</Button>
      <Button onClick={() => incrementCount()}>+</Button>
    </div>
  );
};
