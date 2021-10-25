import React from "react";
import Todo from "./Todo";
import { MdDelete, MdCheckCircle } from "react-icons/md";

const TodoList = ({ todos, setTodos }) => {
  // DELETE ITEM OBJECT FROM ARRAY STATE
  const deleteTodo = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // HANDLE TODO UPDATES COMPLETED FIELD IN OBJECT
  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  return (
    <div>
      {todos.map((todo) => {
        return (
          <ul key={todo.id}>
            <li>
              <Todo todo={todo} />

              <div>
                <button
                  onClick={() => {
                    handleComplete(todo);
                  }}
                >
                  <MdCheckCircle />
                </button>
                <button
                  onClick={() => {
                    deleteTodo(todo);
                  }}
                >
                  <MdDelete />
                </button>
              </div>
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default TodoList;
