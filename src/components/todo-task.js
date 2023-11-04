import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const TodoTask = ({task, index, onDelete}) => {
  return (
    <div className='Todo'>
        <h1>{index}</h1>
        <p>
          {task.task}
        </p>
        <div>
          <label>
          <input type="checkbox" />
          </label>
          <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={() => onDelete(task.id)}/>
        </div>
    </div>
  )
}
