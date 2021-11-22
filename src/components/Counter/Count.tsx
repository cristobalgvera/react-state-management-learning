import { useCounterState } from '../../context/counterContext';

export const Count = () => {
  const count = useCounterState((state) => state.count);
  return (
    <span className="font-bold text-2xl">
      <span className="text-yellow-600">➡ </span>
      {count}
    </span>
  );
};
