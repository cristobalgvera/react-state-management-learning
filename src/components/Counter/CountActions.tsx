import {
  decrementCount,
  incrementCount,
} from '../../feature/state/counter/counterSlice';
import { useAppDispatch } from '../../feature/hooks';
import { Button } from '../UI/Button';

export const CountActions = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="flex gap-x-4">
      <Button onClick={() => dispatch(decrementCount())}>-</Button>
      <Button onClick={() => dispatch(incrementCount())}>+</Button>
    </div>
  );
};
