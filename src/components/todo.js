import React, { useState } from 'react'
import { TodoInput } from './todoinput'
import { v4 as uuidv4 } from 'uuid'
import { TodoTask } from './todo-task';
uuidv4();


export const Todo = () => {
  const [todos, setTodos ] = useState([])

  const addTodo = todo => {
    setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false}]);
    console.log(todos);
  }

  const onDelete = (id) => {
    const newTodos = [...todos];
    const delTodo = newTodos.filter((value) => {
      return value.id !== id
    })
    setTodos(delTodo)
  }

  return (
    <div className='TodoWrapper'>
      <TodoInput addTodo={addTodo}/>
      <div>
        {todos.map((todo, index) => (
        <TodoTask key={todo.id} task={todo} index={index + 1} onDelete={onDelete}/>
        ))}
      </div>
    </div>
  )
}
