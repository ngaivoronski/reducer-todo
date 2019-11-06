import React, {useContext} from 'react';
import ToDoContext from '../contexts/ToDoContext';

const ToDoList = () => {
    const { state, toggleComplete } = useContext(ToDoContext);

    return (
        <div >
            {state.toDoList.map((todo, index) => {
                return (
                <div className="todo-list-div"
                    onClick={() => toggleComplete(todo.id)}
                >
                <p>Task: {todo.item}</p>
                <p>ID: {todo.id}</p>
                <p>Completed: {todo.completed ? "Completed" : "Open"}</p>
                <div className="tag-div"> 
                    {todo.tags.map((tag, index) => {
                        if (index === 0) {
                            return <p className="tag-item">Tags: {tag} </p>
                        } else {
                            return <p className="tag-item">, {tag}</p>
                        }
                    })}
                </div>
                </div>
                );
            })}
        </div>
    );
};

export default ToDoList;