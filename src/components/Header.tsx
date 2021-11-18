import { FC } from 'react';

interface HeaderProps {
  title: string;
  subtitle?: string;
}

export const Header: FC<HeaderProps> = ({ title, subtitle, children }) => (
  <header className="flex flex-col justify-center items-center gap-y-10 mb-4">
    <h1 className="font-extrabold text-6xl">{title}</h1>
    {subtitle && (
      <h2 className="font-bold text-3xl text-purple-500">{subtitle}</h2>
    )}
    {children}
  </header>
);
