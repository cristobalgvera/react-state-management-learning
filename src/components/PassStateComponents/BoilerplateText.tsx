interface BoilerplateTextProps {
  componentNumber: number;
}

export const BoilerplateText = ({ componentNumber }: BoilerplateTextProps) => {
  return (
    <>
      <h1 className="font-bold">Componente {componentNumber}</h1>
      <p className="text-gray-300">Cosas del componente {componentNumber}</p>
    </>
  );
};
