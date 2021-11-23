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
