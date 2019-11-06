import React, {useReducer, useState} from 'react';
import './App.css';
import { useLocalStorage } from './hooks/useLocalStorage';
import { initialState, appReducer } from './reducers/reducer'
import ToDoContext from './contexts/ToDoContext';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';

function App() {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const [todos, setToDos] = useState([{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  }]);

  const [toDoItem, setToDoItem] = useState({
    item: '',
    completed: false,
    id: new Date().valueOf()
  });

  const addToDo = item => {
		// add the given item to the cart
		setToDos([...todos, item]);
  };

  const changeToDo = () => {
    dispatch({ type: "ADD", payload: toDoItem.title });
  }
  

  return (
    <div className="App">
      <ToDoContext.Provider value={{ todos, setToDos, addToDo, toDoItem, setToDoItem, changeToDo }}>
        <ToDoForm />
        <ToDoList />

      </ToDoContext.Provider>
    </div>
  );
}

export default App;
