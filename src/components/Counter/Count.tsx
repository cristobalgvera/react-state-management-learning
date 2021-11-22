import { useCounter } from '../../context/counterContext';

export const Count = () => {
  const { count } = useCounter();
  return (
    <span className="font-bold text-2xl">
      <span className="text-yellow-600">➡ </span>
      {count}
    </span>
  );
};
