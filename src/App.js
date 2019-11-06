import React, { useReducer, useState } from "react";
import {initialState, appReducer} from './reducers/reducer';
import ToDoContext from './contexts/ToDoContext';
import './App.css';
import ToDoList from "./components/ToDoList";
import ToDoForm from "./components/ToDoForm";

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
      <ToDoContext.Provider value={{ state, dispatch, ToDoItem, setToDoItem, state, appReducer, toggleComplete, handleToDoItemChange, saveToDoItem, clearComplete }}>
      <h1>ToDo List</h1>

      <ToDoForm />

      <ToDoList />

    </ToDoContext.Provider>
    </div>
  );
};

export default App;
