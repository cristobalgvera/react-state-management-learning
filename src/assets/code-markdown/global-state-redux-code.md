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
import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { counterReducer } from './counter/counterReducer';

const reducer = combineReducers({
  counter: counterReducer,
});

const store = createStore(reducer, devToolsEnhancer({}));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
```

src/state/hooks

```tsx
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
```

src/state/counter/counterReducer.ts

```tsx
import type { CounterAction } from './counterActions';

type CounterState = { count: number };

const defaultInitialState: CounterState = { count: 0 };

export function counterReducer(
  state = defaultInitialState,
  action: CounterAction,
) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + (action.payload ?? 1) };
    case 'DECREMENT':
      return { ...state, count: state.count - (action.payload ?? 1) };
    case 'SET':
      return { ...state, count: action.payload };
    case 'RESET':
      return { ...defaultInitialState };
    default:
      return state;
  }
}
```

src/state/counter/counterActions.ts

```tsx
type CounterDefaultPayload = { payload?: number };

type IncrementAction = { type: 'INCREMENT' } & CounterDefaultPayload;
type DecrementAction = { type: 'DECREMENT' } & CounterDefaultPayload;
type SetAction = { type: 'SET' } & Required<CounterDefaultPayload>;
type ResetAction = { type: 'RESET' };

export type CounterAction =
  | IncrementAction
  | DecrementAction
  | SetAction
  | ResetAction;

export const incrementCount = (payload?: number): IncrementAction => ({
  type: 'INCREMENT',
  payload,
});

export const decrementCount = (payload?: number): DecrementAction => ({
  type: 'DECREMENT',
  payload,
});

export const setCount = (payload: number): SetAction => ({
  type: 'SET',
  payload,
});

export const resetCount = (): ResetAction => ({
  type: 'RESET',
});
```

src/component/Counter/index.tsx

```tsx
import { NestableComponent } from '../NestableComponent/NestableComponent';
import { Count } from './Count';
import { CountActions } from './CountActions';
import { CountReset } from './CountReset';
import { CountSet } from './CountSet';

export const Counter = () => (
  <NestableComponent>
    Componente 1
    <Count />
    <NestableComponent borderColor="green">
      Componente 2
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
```

src/component/Counter/Count.tsx

```tsx
import { useAppSelector } from '../../state/hooks';

export const Count = () => {
  const { count } = useAppSelector((state) => state.counter);
  return (
    <div>
      ➡ <span className="font-bold text-2xl">{count}</span>
    </div>
  );
};
```

src/component/Counter/CountActions.tsx

```tsx
import {
  decrementCount,
  incrementCount,
} from '../../state/counter/counterActions';
import { useAppDispatch } from '../../state/hooks';
import { Button } from '../UI/Button';

export const CountActions = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="flex gap-x-4">
      <Button onClick={() => dispatch(decrementCount())}>-</Button>
      <Button onClick={() => dispatch(incrementCount())}>+</Button>
    </div>
  );
};
```

src/component/Counter/CountReset.tsx

```tsx
import { resetCount } from '../../state/counter/counterActions';
import { useAppDispatch } from '../../state/hooks';
import { Button } from '../UI/Button';

export const CountReset = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="mt-4">
      <Button type="danger" onClick={() => dispatch(resetCount())}>
        Reiniciar
      </Button>
    </div>
  );
};

```

src/component/Counter/CountSet.tsx

```tsx
import { useRef } from 'react';
import { setCount } from '../../state/counter/counterActions';
import { useAppDispatch } from '../../state/hooks';
import { Button } from '../UI/Button';

const defaultValue = 0;

export const CountSet = () => {
  const dispatch = useAppDispatch();

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSetCount = () => {
    const count = Number(inputRef.current?.value ?? defaultValue);
    dispatch(setCount(count));
  };

  return (
    <div className="my-4 flex gap-x-4">
      <input
        ref={inputRef}
        type="number"
        step={1}
        placeholder={defaultValue.toString()}
        defaultValue={defaultValue.toString()}
        className="px-4 py-2 text-blue-700 w-32"
      />
      <Button type="warning" onClick={handleSetCount}>
        Establecer
      </Button>
    </div>
  );
};
```
