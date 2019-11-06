import React, { useState, useContext } from "react";
import ToDoContext from '../contexts/ToDoContext';

const ToDoForm = () => {
    // console.log("this is our props",props);
    const { todos, setToDos, addToDo, toDoItem, setToDoItem, changeToDo } = useContext(ToDoContext);

    // const [toDoItem, setToDoItem] = useState({
    //     item: '',
    //     completed: false,
    //     id: new Date().valueOf()
    // });

    const changeHandler = event => {
        setToDoItem({ ...toDoItem, [event.target.name]: event.target.value });
        console.log(event.target.value);
    };

    const submitForm = event => {
        event.preventDefault();
        changeToDo(toDoItem);
        setToDoItem({ item: "", completed: false, id: new Date().valueOf() });
    };

    return (
        <form onSubmit={submitForm}>
            <label htmlFor="item">Item</label>
            <input
            name="item"
            id="item"
            type="text"
            placeholder="item"
            onChange={changeHandler}
            value={toDoItem.item}
            />
            <button type="submit">Add ToDo</button>
        </form>
    );
};

export default ToDoForm;