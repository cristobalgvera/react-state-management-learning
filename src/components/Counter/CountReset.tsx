import { resetCount } from '../../feature/state/counter/counterSlice';
import { useAppDispatch } from '../../feature/hooks';
import { Button } from '../UI/Button';

export const CountReset = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="mt-4">
      <Button type="danger" onClick={() => dispatch(resetCount())}>
        Reiniciar
      </Button>
    </div>
  );
};
