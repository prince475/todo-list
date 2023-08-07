import { useState } from 'react'

import './App.css'

function App() {
  const [toDoList, setTodoList] = useState([

    {"text": "Do shopping", id:1234},
    {"text": "Prepare Breakfast", id:12345},
])

function deleteItem(id) {
  setTodoList ((toDoList) => toDoList.filter((rec) => id !== rec.id))
}


const addTask = (userInput) => {
  const newValue = {text: userInput, id: Date.now()}
}

  return (
    <>
      <div className='container'>
        <div className='row mb-1 ms-1 me-1 mt-2'>
         <AddForm addTask={addTask}></AddForm>
        </div>
        <div className='row mb-1 ms-1 me-1 mt-3'>
         <TodoItems entries={toDoList} deleteItem={deleteItem}/>
        </div>
      </div>
    </>
  )
}

export default App
