import React from 'react';
import './ToDoForm.css';

function ToDoForm() {
    return (
        <div className='todoform_container'>
            <div className="input_container">
                <input type="text" placeholder='Enter the title of the task' className='input_field' />
                <input type="text" placeholder='Enter the task' className='input_field' />
            </div>
            <button>Add</button>
        </div>
    )
}

export default ToDoForm
