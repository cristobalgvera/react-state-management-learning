src/main.tsx

```tsx
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
```

src/state/store.ts

```tsx
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

```

src/feature/services/pokemon/pokemonApi.ts

```ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Pokemon } from '../../../types/pokemon';

type PokemonResponse = Pick<Pokemon, 'name' | 'url'>;

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
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
```

src/feature/state/pokemon/pokemonSlice.tsx

```ts
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
```

src/types/pokemon.ts

```ts
export type Pokemon = {
  id: number;
  name: string;
  url: string;
  image: string;
};
```

src/App.tsx

```tsx
import { CodeBlock } from './components/CodeBlock/CodeBlock';
import { Counter } from './components/Counter';
import { Header } from './components/Header';
import { Implementation } from './components/Implementation';
import { Layout } from './components/Layout';
import { PokemonList } from './components/Pokemon/PokemonList';
import { useCodeMarkdown } from './hooks/useCodeMarkdown';

function App() {
  const codeMarkdown = useCodeMarkdown('global-state-redux-toolkit-query');

  return (
    <Layout>
      <Header
        title="Gestión de estados"
        subtitle="Estado global externo con Redux Toolkit Query"
      />
      <main className="row-span-6 mt-4">
        <div className="grid grid-cols-5 gap-x-16 justify-center items-center">
          <CodeBlock codeMarkdown={codeMarkdown} />
          <Implementation>
            <Counter />
          </Implementation>
        </div>
        <div>
          <Implementation fullRow>
            <PokemonList />
          </Implementation>
        </div>
      </main>
    </Layout>
  );
}

export default App;
```

src/state/hooks

```tsx
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
```

src/feature/counter/counterSlice.ts

```tsx
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CountPayload = number | undefined;

interface CounterState {
  count: number;
}

const defaultInitialState: CounterState = { count: 10 };

export const counterSlice = createSlice({
  name: 'counter',
  initialState: defaultInitialState,
  reducers: {
    incrementCount: (state, action: PayloadAction<CountPayload>) => {
      state.count += action.payload ?? 1;
    },
    decrementCount: (state, action: PayloadAction<CountPayload>) => {
      state.count -= action.payload ?? 1;
      if (state.count <= 0) state.count = 1;
    },
    setCount: (state, action: PayloadAction<number>) => {
      state.count = action.payload;
      if (state.count <= 0) state.count = 1;
    },
    resetCount: (state) => {
      state.count = defaultInitialState.count;
    },
  },
});

export const { incrementCount, decrementCount, setCount, resetCount } =
  counterSlice.actions;

export default counterSlice.reducer;
```

src/component/Counter/index.tsx

```tsx
import { NestableComponent } from '../NestableComponent/NestableComponent';
import { SelectedPokemon } from '../Pokemon/SelectedPokemon';
import { Count } from './Count';
import { CountActions } from './CountActions';
import { CountReset } from './CountReset';
import { CountSet } from './CountSet';

export const Counter = () => {
  return (
    <NestableComponent>
      Componente 1
      <Count />
      <NestableComponent borderColor="green">
        Componente 2
        <SelectedPokemon />
        <NestableComponent borderColor="pink">
          Componente 3
          <CountSet />
          <NestableComponent borderColor="purple">
            Componente 4
            <NestableComponent borderColor="yellow">
              Componente 5
              <CountActions />
            </NestableComponent>
          </NestableComponent>
        </NestableComponent>
        <CountReset />
      </NestableComponent>
    </NestableComponent>
  );
};
```
