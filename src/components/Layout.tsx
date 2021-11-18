import { FC } from 'react';

export const Layout: FC = ({ children }) => (
  <div className="grid grid-flow-row grid-rows-4 h-screen py-24 px-32 items-center">
    {children}
  </div>
);
