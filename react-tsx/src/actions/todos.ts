export const addTodo = (todo: any): any => ({
  type: "ADD",
  ...todo
});

export const removeExpense = (id: any): any => ({
  type: "REMOVE",
  id
});

export const startAddTodo = (title: any): any => {
  return (dispatch: any, getState: any) => {
    const todo: any = {
      title: title,
      id: Date.now(),
      completed: false
    };
    console.log("adding...", todo);
    dispatch(
      addTodo({
        todo
      })
    );
    console.log("finished");
  };
};

// export const startRemoveExpense = id => {
//   return (dispatch, getState) => {
//     dispatch(removeExpense({ id }));
//   };
// };
