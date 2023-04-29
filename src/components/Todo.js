import { useRef, useReducer } from "react";
import { TodoData } from "../data/TodoData";
import { TodoReducer } from "../data/TodoReducer";

export default function Todo() {
  const [todos, dispatch] = useReducer(TodoReducer, TodoData);
  const textoDoTodo = useRef(null);

  function adicionar() {
    dispatch({
      type: "ADD_TODO",
      payload: { text: textoDoTodo.current.value },
    });
  }

  return (
    <div>
      <h1>Todo's</h1>
      <input type="text" ref={textoDoTodo} placeholder="Digite sua tarefa" />
      <button onClick={adicionar}>Adicionar</button>

      {todos.map((todo, index) => {
        return <li key={index}>{todo.texto}</li>;
      })}
    </div>
  );
}
