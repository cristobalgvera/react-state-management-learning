import { useAppSelector } from '../../feature/hooks';
import { useGetPokemonListQuery } from '../../feature/services/pokemon/pokemonApi';
import { PokemonCard } from './PokemonCard';

export const PokemonList = () => {
  const { count } = useAppSelector((state) => state.counter);
  const {
    data: pokemonList,
    isSuccess,
    isFetching,
  } = useGetPokemonListQuery(count);

  return isSuccess ? (
    <div className="grid grid-cols-5 gap-8">
      {pokemonList?.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  ) : isFetching ? (
    <div className="h-screen">Cargando...</div>
  ) : (
    <div>Error</div>
  );
};
