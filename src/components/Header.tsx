import { FC } from 'react';

interface HeaderProps {
  title: string;
}

export const Header: FC<HeaderProps> = ({ title, children }) => (
  <header className="flex flex-col justify-center items-center gap-y-10">
    <h1 className="font-extrabold text-6xl animate-bounce">{title}</h1>
    {children}
  </header>
);
