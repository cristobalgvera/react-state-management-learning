import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type PokemonResponse = { name: string };

type Pokemon = { id: number; image: string } & PokemonResponse;

export const pokemonApi = createApi({
  reducerPath: 'pokemon',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/pokemon/' }),
  endpoints: (builder) => ({
    getPokemonList: builder.query<Pokemon[], number>({
      query: (limit) => ({ url: `?limit=${limit}` }),
      transformResponse: (response: { results?: PokemonResponse[] }) =>
        response.results?.map((pokemon, index) => ({
          ...pokemon,
          id: index + 1,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            index + 1
          }.png`,
        })) ?? [],
    }),
  }),
});

export const { useGetPokemonListQuery } = pokemonApi;
export default pokemonApi;
