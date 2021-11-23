import { useAppDispatch } from '../../feature/hooks';
import { selectPokemon } from '../../feature/state/pokemon/pokemonSlice';
import { Pokemon } from '../../types/pokemon';

interface PokemonCardProps {
  pokemon: Pokemon;
}

export const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const dispatch = useAppDispatch();
  const { id, name, image } = pokemon;

  const handleClick = () => {
    dispatch(selectPokemon(pokemon));
    window.scrollTo(0, 0);
  };

  return (
    <div
      className="flex flex-col justify-center items-center gap-y-4 cursor-pointer py-2 px-3 border border-blue-600 rounded hover:bg-blue-800 transition-colors duration-200"
      onClick={handleClick}
    >
      <img src={image} alt={name} className="w-32 p-2 m-2" />
      <span className="uppercase font-medium text-md">
        {id} - {name}
      </span>
    </div>
  );
};
