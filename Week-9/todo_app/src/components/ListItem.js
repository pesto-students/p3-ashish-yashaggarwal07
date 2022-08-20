import React from 'react';
import '../App.css';
import { faTrash, faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ListItem({ item, index, deleteTodoItem, completeTodoItem }) {
    return (
        <div className='todolist'>
                <li className={item.completed ? 'line-through' : ''}
                >
                    {item.todoItem}
                </li>
            <div className='btns'>
                <button onClick={() => completeTodoItem(index)}>
                    {item.completed ? 'Undo' : <FontAwesomeIcon icon={faCheckSquare} />}
                </button>
                <button onClick={() => deleteTodoItem(index)}>
                    <FontAwesomeIcon icon={faTrash} /></button>
            </div>
        </div>
    )
}
