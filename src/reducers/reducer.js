import React, { useReducer } from 'react'

export const initialState = {
    toDoList: [{
        item: 'Learn about reducers',
        completed: false,
        id: new Date().valueOf()
        }]
};

export const appReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            console.log(action);
            return { ...state, toDoList: [...state.toDoList, action.payload] };
        case "MARK_COMPLETE":
                return { ...state, toDoList: state.toDoList.map(item => {
                            if (item.id === action.payload) {
                                return {
                                    ...item, completed: !item.completed
                                };
                            }
                            else {
                                return item;
                            }
                        }) };
        case "CLEAR_COMPLETE":
            return {...state, toDoList : state.toDoList.filter(item => item.completed === false)}
        default:
            throw new Error("No action matched!");
    }
};