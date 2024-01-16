import React from 'react'
import TodoItem from "./TodoItem";

function TodoList({todos, deleteTodo}) {
  return (
    <div>
      {!todos.length && <h2>Todo list is empty</h2>}

      {
        todos.map((data)=> (
          <TodoItem key={data.id} item={data} deleteTodo={deleteTodo} />
        ))
      }
    </div>
  )
}

export default TodoList