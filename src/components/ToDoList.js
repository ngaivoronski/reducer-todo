import React, {useContext} from 'react';
import ToDoContext from '../contexts/ToDoContext';

const ToDoList = () => {
    const { state, toggleComplete } = useContext(ToDoContext);

    return (
        <div className="todo-list">
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

export default ToDoList;