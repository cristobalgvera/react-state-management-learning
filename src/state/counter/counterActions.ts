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
