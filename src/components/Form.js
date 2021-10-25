import React from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({ input, setInput, todos, setTodos }) => {
  // UPDATE INPUT VALUE
  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleFormSubmit = (e) => {
    //PREVENTS PAGE FROM RELOADING
    e.preventDefault();

    //  UPDATE TODOS STATE WITH NEW OBJECT
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), title: input, completed: false }];
    });
  };
  return (
    <form action="" onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="Enter your todo.."
        value={input}
        onChange={onInputChange}
        required
      />
      <button>Add</button>
    </form>
  );
};

export default Form;
