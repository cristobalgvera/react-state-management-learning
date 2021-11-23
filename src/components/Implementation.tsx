import { FC } from 'react';

interface ImplementationProps {
  fullRow?: boolean;
}

export const Implementation: FC<ImplementationProps> = ({
  fullRow,
  children,
}) => (
  <div
    className={`${
      fullRow ? 'col-span-full' : 'col-span-2'
    } px-8 py-4 flex flex-col justify-center items-center`}
  >
    {children}
  </div>
);
