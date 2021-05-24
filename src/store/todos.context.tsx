import { createContext, useState } from "react";
import Todo from "../models/todo";

type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

 export const TodosContext = createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});
const TodosContextProvider: React.FC = (props) => {
  const [todos, SetTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodos = new Todo(todoText);

    SetTodos((prevTodos) => {
      return prevTodos.concat(newTodos);
    });
  };

  const removeTodoHandler = (todoId: string) => {
    SetTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };
  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider
