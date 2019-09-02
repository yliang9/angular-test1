import { Action, createReducer, on } from '@ngrx/store';
import { FibCalStart, FibCalfinished} from './fib.actions';
import { Store } from '@ngrx/store';


export interface State {
  fib: number;
}

export const initialState: State = {
  fib: 0
};

const fibReducer = createReducer(
  initialState,
  on(FibCalStart, state => ({ ...state})),
  on(FibCalfinished, (state, action) => ({...state, fib: 1 })),
  
);

export function reducer(state: State | undefined, action: Action) {
  return fibReducer(state, action);
}

