import React, { useState } from 'react'

export const TodoInput = ({addTodo}) => {
  const [value, setValue ] = useState("")

  const handleSubmit = e => {
    e.preventDefault();
    addTodo(value)
    setValue("")
  }

  return (
    <div>
        <form className='TodoForm' onSubmit={handleSubmit}>
          <input type='text' placeholder='new task' value={ value } className='todo-input' onChange={(e) => setValue(e.target.value)}/>
          <button type='submit' className='todo-btn'>Add task</button>
        </form>
    </div>
  )  
}
