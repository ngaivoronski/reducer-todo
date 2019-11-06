import React, { useReducer, useState } from "react";
import {initialState, appReducer} from './reducers/reducer';
import './App.css';

const App = () => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const [ToDoItem, setToDoItem] = useState({
    item: '',
    completed: false,
    id: new Date().valueOf()
    });

  const handleToDoItemChange = event => {
    setToDoItem({...ToDoItem, item: event.target.value, id: new Date().valueOf()});
  };

  const saveToDoItem = () => {
    dispatch({ type: "ADD_TODO", payload: ToDoItem });
    setToDoItem({
      item: '',
      completed: false,
      id: new Date().valueOf()
      })
  };

  const toggleComplete = id => {
    dispatch({ type: "MARK_COMPLETE", payload: id });
  };

  const clearComplete = () => {
    dispatch({ type: "CLEAR_COMPLETE"});
  }

  return (
    <div className="App">
      <h1>ToDo List</h1>

      <div>
          <input
            type="text"
            ToDoItem="ToDoItem"
            onChange={handleToDoItemChange}
            value={ToDoItem.item}
          />
          <button onClick={saveToDoItem}>New To Do</button>
          <button onClick={clearComplete}>Clear Complete</button>
      </div>
      
      {state.toDoList.map((todo, index) => {
        return (
          <div
            onClick={() => toggleComplete(todo.id)}
          >
          <p>Task: {todo.item}</p>
          <p>ID: {todo.id}</p>
          <p>Completed: {todo.completed ? "Completed" : "Open"}</p>
          </div>
        );
      })}

      
    </div>
  );
};

export default App;
