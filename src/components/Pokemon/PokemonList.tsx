import { useAppSelector } from '../../feature/hooks';
import { useGetPokemonListQuery } from '../../feature/services/pokemon/pokemonApi';

export const PokemonList = () => {
  const { count } = useAppSelector((state) => state.counter);
  const { data, isSuccess, isFetching } = useGetPokemonListQuery(count);

  return isFetching ? (
    <div>Loading...</div>
  ) : isSuccess ? (
    <div className="grid grid-cols-5 gap-4">
      {data?.map(({ id, image, name }) => (
        <div
          key={id}
          className="flex flex-col justify-center items-center gap-y-4 py-2 px-3 border border-blue-600 rounded"
        >
          <img src={image} alt={name} className="w-32 p-2 m-2" />
          <span className="uppercase font-medium text-md">
            {id} - {name}
          </span>
        </div>
      ))}
    </div>
  ) : (
    <div>Error</div>
  );
};
