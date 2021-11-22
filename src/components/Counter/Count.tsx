import { useAppSelector } from '../../state/hooks';

export const Count = () => {
  const { count } = useAppSelector((state) => state.counter);
  return (
    <div>
      ➡ <span className="font-bold text-2xl">{count}</span>
    </div>
  );
};
