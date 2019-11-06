import React, { useState, useContext } from "react";
import ToDoContext from '../contexts/ToDoContext';

const ToDoForm = () => {
    const { handleToDoItemChange, ToDoItem, saveToDoItem, clearComplete, tagItem, handleTagChange, addTag } = useContext(ToDoContext);

    return (
        <div className="todo-form-div">
            <div className="button-div">
                <label htmlFor="ToDoItem">Task: </label>
                <input
                    type="text"
                    name="ToDoItem"
                    onChange={handleToDoItemChange}
                    value={ToDoItem.item}
                    className="task-input"
                />
            </div>

            <div className="tag-div">
                {ToDoItem.tags.map((tag, index) => {
                    if (index === 0) {
                        return <p className="tag-item">Tags: {tag} </p>
                    } else {
                        return <p className="tag-item">, {tag}</p>
                    }
                })}
            </div>
            <div className="button-div">
            <input 
                type="text"
                name="tags"
                onChange={handleTagChange}
                value={tagItem}
                className="tag-input"
            />
            <button onClick={addTag} className="add-tag-button">Add Tag</button>
            </div>
            <button onClick={saveToDoItem} className="new-todo-button">Create New To Do</button>
            <button onClick={clearComplete} className="clear-complete-button">Clear Complete</button>
        </div>
    );
};

export default ToDoForm;