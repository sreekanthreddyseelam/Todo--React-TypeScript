import React, { useContext } from "react";

import { TodosContext } from "../store/todos.context";

import TodoItem from "./TodoItem";
import classes from  './Todos.module.css';

const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext)
  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((m) => {
        return <TodoItem key={m.id} text={m.text} onRemoveTodo={todosCtx.removeTodo.bind(null,m.id)} />;
      })}
    </ul>
  );
};

export default Todos;
