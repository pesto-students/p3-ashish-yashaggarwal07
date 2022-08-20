import './App.css';
import Todo from './components/Todo'
import { useEffect, useState } from 'react';
import ListItem from './components/ListItem';

function App() {
  const [todoItems, setTodoItems] = useState([]);
  useEffect(()=>{
    setTodoItems([]);
  },[])
  const createTodoItem = (todoItem) => {
    const updatedTodoList = [...todoItems, { todoItem, completed: false }];
    setTodoItems(updatedTodoList);
};
const deleteTodoItem = (index) => {
  const updatedTodoList = [...todoItems];
  updatedTodoList.splice(index, 1);
  setTodoItems(updatedTodoList);
};

const completeTodoItem = (index) => {
  const updatedTodoList = [...todoItems];
  updatedTodoList[index].completed === false
      ? (updatedTodoList[index].completed = true)
      : (updatedTodoList[index].completed = false);
  setTodoItems(updatedTodoList);
};

  return (
    <div className="App">
      <header>
        Todo List
        </header>
        <div className="container">
     <Todo
     createTodoItem={createTodoItem}
     />
        {todoItems.map((item, index) => (
                    <ListItem
                        key={index}
                        index={index}
                        item={item}
                        deleteTodoItem={deleteTodoItem}
                        completeTodoItem={completeTodoItem}
                    />
                ))}
                </div>
    </div>
  );
}

export default App;
