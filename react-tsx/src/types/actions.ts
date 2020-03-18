import { Todo } from "./Todo";

export const ADD = "ADD";
export const REMOVE = "REMOVE";
export const TOOGLE = "TOOGLE";

export interface AddAction {
  type: typeof ADD;
  todo: Todo;
}
export interface RemoveAction {
  type: typeof REMOVE;
  id: number;
}

export interface ToogleAction {
  type: typeof TOOGLE;
  id: number;
}


export type TodoActionTypes =
  | AddAction
  | RemoveAction
  | ToogleAction;

export type AppActions = TodoActionTypes;