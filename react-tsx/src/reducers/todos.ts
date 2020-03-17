const todosReducerDefaultState: any[] = [];

export default (state = todosReducerDefaultState, action: any) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.todo];
    case "REMOVE":
      return state.filter(({ id }) => id !== action.id);

    default:
      return state;
  }
};
