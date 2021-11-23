import { configureStore } from '@reduxjs/toolkit';
import pokemonApi from './services/pokemon/pokemonApi';
import counterReducer from './state/counter/counterSlice';
import pokemonReducer from './state/pokemon/pokemonSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    pokemon: pokemonReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
