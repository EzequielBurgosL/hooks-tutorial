import React, { useReducer, useContext, useState } from "react";

import './TodoApp.scss'

function appReducer(state, action) {
  switch (action.type) {
    case "reset": {
      return action.payload;
    }
    case "add": {
      return [
        ...state,
        {
          id: Date.now(),
          text: "",
          completed: false
        }
      ];
    }
    case "update": {
      return state.map(item => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            text: action.payload.value
          };
        }
        return item;
      });
    }
    case "delete": {
      return state.filter(item => item.id !== action.payload);
    }
    case "completed": {
      return state.map(item => {
        if (item.id === action.payload) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      });
    }
    default: {
      return state;
    }
  }
}

const TodosContext = React.createContext();

export default function TodosApp() {
  const [state, dispatch] = useReducer(appReducer, []);  // el segundo parámetro es el estado inicial

  const newUsers = state.filter(el => el.completed === false)
  const savedUsers = state.filter(el => el.completed === true)

  return (
    <TodosContext.Provider value={dispatch}>
      <div className="todoApp">
        <div className="todoApp-header">
          <h1>Hotel California</h1>
          <button 
            className="btn" 
            onClick={() => dispatch({ type: "add" })}
          >Create user</button>
        </div>
        <h2>New Users</h2>
        <TodosList items={newUsers} />
        <h2>Saved Users</h2>
        <TodosList items={savedUsers} />
      </div>
    </TodosContext.Provider>
  );
}

function TodosList({ items }) {
  return (
    <div className="todo-list">
      {items.map(item => (
        <TodoItem key={item.id} {...item} />
      ))}
    </div>
  );
}

function TodoItem({ id, text = "" }) {
  const [value, setValue] = useState("");
  const dispatch = useContext(TodosContext);

  return (
    <div className="todo-item">
      <p className="todo-item-placeholder">NAME:</p>
      <p className="todo-item-text">{text}</p>
      <input
        className="todo-item-input"
        type="text"
        placeholder="insert name"
        value={value}
        onChange={e => setValue(e.target.value)}
        onKeyPress={e => {
          if(e.key === 'Enter') {
            dispatch({ type: "update", payload: { id, value } })
            setValue('')
          }
        }}
      />
      <button
        className="btn"
        onClick={() => dispatch({ type: "completed", payload: id })}
      >
        Save
      </button>
      <button
        className="btn"
        onClick={() => dispatch({ type: "delete", payload: id })}
      >
        Delete
      </button>
    </div>
  );
}
