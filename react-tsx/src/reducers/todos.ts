import { Todo } from "../types/Todo";
import { TodoActionTypes, ADD, REMOVE, TOOGLE } from "../types/actions";

const initialState: Array<Todo> = [];

export default (state = initialState, action: TodoActionTypes): Todo[] => {
  switch (action.type) {
    case ADD:
      return [...state, action.todo];
    case REMOVE:
      return state.filter(item => item.id !== action.id);
    case TOOGLE:
      return state.map(item => {
        if (item.id === action.id) {
          item.completed = !item.completed;
        }
        return item;
      });
    default:
      return state;
  }
};
