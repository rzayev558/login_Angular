import { createAction, props } from '@ngrx/store';
import { RegisterRequest } from '../shared/types';

export const register = createAction(
  '[Auth] Register',
  props<{ request: RegisterRequest }>()
);
