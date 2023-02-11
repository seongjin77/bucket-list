import React from 'react'
import CreateTodo from '../../components/todo/createTodo/CreateTodo'
import { TodoBox, TodoWrap } from './TodoStyle'

const Todo = () => {
  return (
    <TodoWrap>
      <TodoBox>
        <CreateTodo/>
      </TodoBox>
    </TodoWrap>
  )
}

export default Todo