import React, {useState} from 'react'
import TodoForm from './TodoForm'
import TodoList from "./TodoList"

function Todo() {
  const [todos, setTodos] = useState([
    {title: "Go to course", completed: false, id:1},
    {title: "Read a book", completed: true, id:2},
    {title: "Go to gym", completed: false, id:3},
  ])

  const addTodoHandler = (text) => {
    const newTodo = {
      title: text,
      completed: false,
      id: todos.length + 1,
    }
    if(text.trim() !== ""){
      setTodos([...todos, newTodo])
    }
  }

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((x) => x.id !== id))
  }
  return (
    <div>
      <h1>Todo app</h1>
      <TodoForm addTodo={addTodoHandler} />
      <button className='btn'>Clear</button>
      <TodoList todos={todos} deleteTodo={deleteTodoHandler} />
    </div>
  )
}

export default Todo