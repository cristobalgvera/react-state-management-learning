src/context/counterContext.tsx

```tsx
type CounterContextType = {
  state: CounterStateType;
  increment: (amount?: number) => void;
  decrement: (amount?: number) => void;
  reset: () => void;
};

type CounterStateType = {
  count: number;
};

type IncrementAction = { type: 'increment'; amount?: number };
type DecrementAction = { type: 'decrement'; amount?: number };
type ResetAction = { type: 'reset' };

type CounterActionType = IncrementAction | DecrementAction | ResetAction;

const defaultInitialState: CounterStateType = {
  count: 0,
};

const counterReducer = (state: CounterStateType, action: CounterActionType) => {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + (action.amount ?? 1) };
    case 'decrement':
      return { ...state, count: state.count - (action.amount ?? 1) };
    case 'reset':
      return { ...defaultInitialState };
    default:
      return state;
  }
};

const CounterContext = createContext<CounterContextType>({
  state: { ...defaultInitialState },
  decrement: () => {},
  increment: () => {},
  reset: () => {},
});

export const CounterProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(counterReducer, defaultInitialState);

  const increment = (amount?: number) =>
    dispatch({ type: 'increment', amount });

  const decrement = (amount?: number) =>
    dispatch({ type: 'decrement', amount });

  const reset = () => dispatch({ type: 'reset' });

  return (
    <CounterContext.Provider value={{ state, increment, decrement, reset }}>
      {children}
    </CounterContext.Provider>
  );
};

const useCounter = () => {
  const counterContext = useContext(CounterContext);

  if (!counterContext)
    throw new Error('useCounter must be used within a CounterProvider');

  return counterContext;
};

export const useCounterAction = () => {
  const { increment, decrement, reset } = useCounter();
  return { increment, decrement, reset };
};

export function useCounterState<T>(
  selector: (state: CounterStateType) => T,
): T {
  const { state } = useCounter();
  return selector(state);
}
```

src/component/Counter/CounterImplementation.tsx

```tsx
export const CounterImplementation = () => (
  <CounterProvider>
    <NestableComponent>
      Componente 1
      <Count />
      <NestableComponent borderColor="green">
        Componente 2
        <NestableComponent borderColor="pink">
          Componente 3
          <NestableComponent borderColor="purple">
            Componente 4
            <NestableComponent borderColor="red">
              Componente 5
              <CountActions />
            </NestableComponent>
          </NestableComponent>
          <CountReset />
        </NestableComponent>
      </NestableComponent>
    </NestableComponent>
  </CounterProvider>
);
```

src/component/Counter/Count.tsx

```tsx
export const Count = () => {
  const count = useCounterState((state) => state.count);
  return (
    <span className="font-bold text-2xl">
      <span className="text-yellow-600">➡ </span>
      {count}
    </span>
  );
};
```

src/component/Counter/CountActions.tsx

```tsx
export const CountActions = () => {
  const { decrement, increment } = useCounterAction();
  return (
    <div className="flex gap-x-4 mt-4">
      <Button onClick={() => decrement()}>-</Button>
      <Button onClick={() => increment()}>+</Button>
    </div>
  );
};
```

src/component/Counter/CountReset.tsx

```tsx
export const CountReset = () => {
  const { reset } = useCounterAction();
  return (
    <div className="mt-4">
      <Button onClick={reset}>Reset</Button>
    </div>
  );
};
```
