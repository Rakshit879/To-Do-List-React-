import React from 'react'
import './ToDoItem.css'

function ToDoItem() {
  return (
    <div className='todoitem_container'>
      <input type='checkbox'></input>
      <input type="text" />
      <button>Edit</button>
      <button>Delete</button>
    </div>
  )
}


export default ToDoItem
