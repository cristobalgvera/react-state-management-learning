import reactLogo from '../assets/logo.svg';

export const Logo = () => {
  return (
    <picture className="flex justify-center items-center">
      <img src={reactLogo} alt="React Logo" className="w-80" />
    </picture>
  );
};
