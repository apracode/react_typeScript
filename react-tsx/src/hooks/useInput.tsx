import { useRef } from "react";
import { useDispatch } from "react-redux";
import { startAddTodo } from "../actions/todos";

function useInput() {
  const ref = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const keyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      dispatch(startAddTodo(ref.current!.value));
      ref.current!.value = "";
    }
  };

  return [ref, keyPress];
}

export default useInput;
