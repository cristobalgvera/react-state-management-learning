import { useCounterAction } from '../../context/counterContext';
import { Button } from '../UI/Button';

export const CountReset = () => {
  const { resetCount } = useCounterAction();
  return (
    <div className="mt-4">
      <Button onClick={resetCount}>Reset</Button>
    </div>
  );
};
