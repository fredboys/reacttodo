
import React, { useState } from 'react';
import './App.css';
import ToDoForm from './components/TodoForm';
import ToDoItem from './components/ToDoItem';

function App() {
  const [toDoItems, setToDoItems] = useState([])

  function addItem(toDoItem){
    setToDoItems(prevToDoItems => {
      return [...prevToDoItems, toDoItem]
    })
  }

  function deleteItem(id) {
    setToDoItems(prevToDoItems => {
      return prevToDoItems.filter((toDoItems, index) => {
        return index !== id;
      })
    })
  }

  return (
    <div className="App">
      <div className='Todo-list'>
        Add your todo task
        <ToDoForm addItem={addItem} />
        {toDoItems.map((toDoItem, index) => (
          <ToDoItem 
            deleteItem={deleteItem}
            index={index}
            item={toDoItem}
            key={index} />
        ))
      }
      </div>
    </div>
  );
}

export default App;
