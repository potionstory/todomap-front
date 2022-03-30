import React from "react";
import { produce } from "immer";
import { useRecoilState } from "recoil";
import { todoState } from "../../../states/todo";
import { TodoItem } from "../../../types/todo";
import MarkerCheck from "../../common/MarkerCheck";
import { TodoWrap } from "./style";

const Todo = () => {
  const [todos, setTodos] = useRecoilState<TodoItem[]>(todoState);

  const onCheckToggle = (id: string) => {
    setTodos((prev) =>
      produce(prev, (draft) => {
        const idx = todos.findIndex((todo) => todo.id === id);
        draft[idx].isChecked = !draft[idx].isChecked;

        return draft;
      }),
    );
  };

  return (
    <TodoWrap>
      <ul>
        {todos.map((todo: TodoItem) => {
          const { id } = todo;

          return (
            <li className="logo" key={id}>
              <MarkerCheck item={todo} sizing="small" clickHandler={onCheckToggle} />
            </li>
          );
        })}
      </ul>
    </TodoWrap>
  );
};

export default Todo;
