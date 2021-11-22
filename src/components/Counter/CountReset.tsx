import { useCounterAction } from '../../context/counterContext';
import { Button } from '../UI/Button';

export const CountReset = () => {
  const { reset } = useCounterAction();
  return (
    <div className="mt-4">
      <Button onClick={reset}>Reset</Button>
    </div>
  );
};
