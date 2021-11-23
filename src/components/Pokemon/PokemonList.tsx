import { useState } from 'react';
import { useGetPokemonListQuery } from '../../feature/services/pokemon/pokemonApi';

export const PokemonList = () => {
  const [pokemonAmount, setPokemonAmount] = useState(24);
  const { data, isSuccess, isFetching } = useGetPokemonListQuery(pokemonAmount);

  return isFetching ? (
    <div>Loading...</div>
  ) : isSuccess ? (
    <div className="grid grid-cols-6 gap-x-4">
      {data?.map(({ id, image, name }) => (
        <div
          key={id}
          className="flex flex-col justify-center items-center gap-y-4"
        >
          <img src={image} alt={name} className="w-32 p-2 m-2" />
          <span className="uppercase">{name}</span>
        </div>
      ))}
    </div>
  ) : (
    <div>Error</div>
  );
};
