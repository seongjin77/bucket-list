import React from 'react'
import CreateTodo from '../../components/todo/createTodo/CreateTodo'
import Todolist from '../../components/todo/todoList/Todolist'
import { TodoBox, TodoWrap } from './TodoStyle'

const Todo = () => {
  return (
    <TodoWrap>
      <TodoBox>
        <CreateTodo/>
        <Todolist/>
      </TodoBox>
    </TodoWrap>
  )
}

export default Todo