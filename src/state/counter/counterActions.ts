type CounterDefaultPayload = { payload?: number };

type IncrementAction = {
  type: 'counter/incrementCount';
} & CounterDefaultPayload;
type DecrementAction = {
  type: 'counter/decrementCount';
} & CounterDefaultPayload;
type SetAction = { type: 'counter/setCount' } & Required<CounterDefaultPayload>;
type ResetAction = { type: 'counter/resetCount' };

export type CounterAction =
  | IncrementAction
  | DecrementAction
  | SetAction
  | ResetAction;

export const incrementCount = (payload?: number): IncrementAction => ({
  type: 'counter/incrementCount',
  payload,
});

export const decrementCount = (payload?: number): DecrementAction => ({
  type: 'counter/decrementCount',
  payload,
});

export const setCount = (payload: number): SetAction => ({
  type: 'counter/setCount',
  payload,
});

export const resetCount = (): ResetAction => ({
  type: 'counter/resetCount',
});
