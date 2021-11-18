import { FC } from 'react';

export const Implementation: FC = ({ children }) => {
  return (
    <div className="col-span-2 px-8 py-4 flex flex-col justify-center items-center">
      {children}
    </div>
  );
};
