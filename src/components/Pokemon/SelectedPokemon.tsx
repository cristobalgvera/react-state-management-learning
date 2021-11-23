import { useAppDispatch, useAppSelector } from '../../feature/hooks';
import { undoSelectPokemon } from '../../feature/state/pokemon/pokemonSlice';
import { NestableComponent } from '../NestableComponent/NestableComponent';
import { Button } from '../UI/Button';

export const SelectedPokemon = () => {
  const { selectedPokemon } = useAppSelector((state) => state.pokemon);
  const dispatch = useAppDispatch();

  if (!selectedPokemon)
    return <span className="text-gray-500">Selecciona un Pokemon</span>;

  return (
    <NestableComponent>
      <div className="flex flex-col justify-center items-center gap-y-4 px-4">
        <h1 className="font-medium text-2xl uppercase">
          {selectedPokemon.name}
        </h1>
        <img
          src={selectedPokemon.image}
          alt={selectedPokemon.name}
          className="w-32"
        />
        <Button type="danger" onClick={() => dispatch(undoSelectPokemon())}>
          Deshacer
        </Button>
      </div>
    </NestableComponent>
  );
};
