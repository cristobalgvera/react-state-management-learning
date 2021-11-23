import { useRef } from 'react';
import { setCount } from '../../feature/state/counter/counterSlice';
import { useAppDispatch } from '../../feature/hooks';
import { Button } from '../UI/Button';

const defaultValue = 10;

export const CountSet = () => {
  const dispatch = useAppDispatch();

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSetCount = () => {
    const count = Number(inputRef.current?.value ?? defaultValue);
    dispatch(setCount(count));
  };

  return (
    <div className="my-4 flex gap-x-4">
      <input
        ref={inputRef}
        type="number"
        step={1}
        placeholder={defaultValue.toString()}
        defaultValue={defaultValue.toString()}
        className="px-4 py-2 text-blue-700 w-32"
      />
      <Button type="warning" onClick={handleSetCount}>
        Establecer
      </Button>
    </div>
  );
};
