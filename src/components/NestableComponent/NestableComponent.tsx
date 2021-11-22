import { FC } from 'react';

type Color = 'blue' | 'green' | 'red' | 'yellow' | 'purple' | 'pink';

interface NestableComponentProps {
  borderColor?: Color;
}

export const NestableComponent: FC<NestableComponentProps> = ({
  borderColor = 'blue',
  children,
}) => {
  const selectBorderColor = (): string => {
    switch (borderColor) {
      case 'blue':
        return 'border-blue-600';
      case 'green':
        return 'border-green-600';
      case 'red':
        return 'border-red-600';
      case 'yellow':
        return 'border-yellow-600';
      case 'purple':
        return 'border-purple-600';
      case 'pink':
        return 'border-pink-600';
      default:
        return 'border-blue-600';
    }
  };

  return (
    <div
      className={`flex flex-col justify-center items-center border rounded p-7 ${selectBorderColor()}`}
    >
      {children}
    </div>
  );
};
