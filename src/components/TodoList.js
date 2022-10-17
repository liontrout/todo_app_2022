import React from 'react'
import TodoListItem from './TodoListItem'
import '../styles/TodoList.scss'

function TodoList({todos, onRemove, onToggle}) {
  // console.log(props);
  // const {todos} = props;
  return (
    <div className='TodoList'>
      {todos.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} onRemove={onRemove} onToggle={onToggle} />
      ))}
    </div>
  )
}

export default TodoList