interface ButtonProps {
  onClick: () => void;
  children: string | number;
  type?: 'primary' | 'warning' | 'danger';
}

export const Button = ({
  onClick,
  children,
  type = 'primary',
}: ButtonProps) => {
  const defineType = (): string => {
    switch (type) {
      case 'primary':
        return 'bg-blue-500 hover:bg-blue-700';
      case 'warning':
        return 'bg-yellow-500 hover:bg-yellow-700';
      case 'danger':
        return 'bg-red-500 hover:bg-red-700';
      default:
        return 'bg-blue-500 hover:bg-blue-700';
    }
  };

  return (
    <button
      className={`text-white min-w-[5rem] font-bold py-2 px-4 rounded ${defineType()}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
