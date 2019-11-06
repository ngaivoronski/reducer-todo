import React, {useContext} from 'react';
import ToDoContext from '../contexts/ToDoContext';

const ToDoList = () => {
    const { todos } = useContext(ToDoContext);

    return (
        <div className="todo-list">
            {todos.map((todo, index) => {
                return (
                    <div className="todo" key={index}>
                        <h2>{todo.item}</h2>
                        <p>{todo.completed}</p>
                        <p>{todo.id}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default ToDoList;