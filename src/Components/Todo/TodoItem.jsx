import React from 'react'
import "./Todo.css"

function TodoItem({item, deleteTodo}) {
  return (
    <div className='todo-item'>
      <input type='checkbox' checked={item.completed} />
      <p className=''>{item.title}</p>
      <button onClick={() => deleteTodo(item.id)} className='btn'>Delete Todo</button>
    </div>
  )
}

export default TodoItem