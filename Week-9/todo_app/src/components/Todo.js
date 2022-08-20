import React from 'react';
import { useState } from 'react';
import '../App.css';

export default function Todo({createTodoItem}) {
  const [text, addTodoText] = useState('');

  const handleSubmit = (e) => {
      e.preventDefault();
      if (text === '') {
          return alert('Cannot create and empty todo');
      }
      createTodoItem(text);
      addTodoText('');
  };

  return (
    <form>
       <input
                type='text'
                placeholder='Add Your Todo'
                value={text}
                onChange={(e) => {
                  addTodoText(e.target.value);
                }}
            />
            <button className="addButton" onClick={handleSubmit}>Add</button>
    </form>
  )
}
