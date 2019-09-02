import { createAction } from '@ngrx/store';

export const FibCalStart = createAction('[App] Calculation Start');
export const FibCalfinished = createAction('[App] Calculation Finished');
export const FibError = createAction('[App] Error');