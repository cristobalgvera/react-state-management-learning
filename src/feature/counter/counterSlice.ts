import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

type CountPayload = number | undefined;

interface CounterState {
  count: number;
}

const defaultInitialState: CounterState = { count: 0 };

export const counterSlice = createSlice({
  name: 'counter',
  initialState: defaultInitialState,
  reducers: {
    incrementCount: (state, action: PayloadAction<CountPayload>) => {
      state.count += action.payload ?? 1;
    },
    decrementCount: (state, action: PayloadAction<CountPayload>) => {
      state.count -= action.payload ?? 1;
    },
    setCount: (state, action: PayloadAction<number>) => {
      state.count = action.payload;
    },
    resetCount: (state) => {
      state.count = defaultInitialState.count;
    },
  },
});

export const { incrementCount, decrementCount, setCount, resetCount } =
  counterSlice.actions;

export const selectCount = (state: RootState) => state.counter;

export default counterSlice.reducer;
