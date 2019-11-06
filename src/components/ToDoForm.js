import React, { useState, useContext } from "react";
import ToDoContext from '../contexts/ToDoContext';

const ToDoForm = () => {
    const { handleToDoItemChange, ToDoItem, saveToDoItem, clearComplete } = useContext(ToDoContext);

    return (
        <div>
            <input
                type="text"
                name="ToDoItem"
                onChange={handleToDoItemChange}
                value={ToDoItem.item}
            />
            <button onClick={saveToDoItem}>New To Do</button>
            <button onClick={clearComplete}>Clear Complete</button>
        </div>
    );
};

export default ToDoForm;