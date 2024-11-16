import React from 'react'
import './TaskPage.css'
import ToDoForm from '../Components/ToDoForm'
import ToDoItem from '../Components/ToDoItem'

function TaskPage() {
  return (
    <div className='task_page_container'>
      <ToDoForm/>
      {/* enter the tasks here */}
      <ToDoItem/>
    </div>
  )
}

export default TaskPage
