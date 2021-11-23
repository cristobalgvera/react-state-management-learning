import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Pokemon } from '../../../types/pokemon';

type PokemonState = {
  selectedPokemon?: Pokemon;
  previousPokemonList: Pokemon[];
};

const initialState: PokemonState = { previousPokemonList: [] };

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    selectPokemon: (state, action: PayloadAction<Pokemon>) => {
      if (state.selectedPokemon)
        state.previousPokemonList.push(state.selectedPokemon);

      state.selectedPokemon = action.payload;
    },
    undoSelectPokemon: (state) => {
      state.selectedPokemon = state.previousPokemonList.pop();
    },
  },
});

export const { selectPokemon, undoSelectPokemon } = pokemonSlice.actions;

export default pokemonSlice.reducer;
