src/context/counterContext.tsx

```tsx
type CounterContextType = {
  count: number;
  incrementCount: (amount?: number) => void;
  decrementCount: (amount?: number) => void;
};

const initialState: CounterContextType = {
  count: 0,
  incrementCount: () => {},
  decrementCount: () => {},
};

const CounterContext = createContext<CounterContextType>({ ...initialState });

export const CounterProvider: FC = ({ children }) => {
  const [count, setCount] = useState(0);

  const incrementCount = (amount = 1) =>
    setCount((prevCount) => prevCount + amount);
  const decrementCount = (amount = 1) =>
    setCount((prevCount) => prevCount - amount);

  return (
    <CounterContext.Provider value={{ count, incrementCount, decrementCount }}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCounter = () => {
  const counterContext = useContext(CounterContext);

  if (!counterContext)
    throw new Error('useCounter must be used within a CounterProvider');

  return counterContext;
};
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
        </NestableComponent>
      </NestableComponent>
    </NestableComponent>
  </CounterProvider>
);
```

src/component/Counter/Count.tsx

```tsx
export const Count = () => {
  const { count } = useCounter();
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
  const { incrementCount, decrementCount } = useCounter();
  return (
    <div className="flex gap-x-4 mt-4">
      <Button onClick={() => decrementCount()}>-</Button>
      <Button onClick={() => incrementCount()}>+</Button>
    </div>
  );
};
```
