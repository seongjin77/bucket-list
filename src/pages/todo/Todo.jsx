import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { getTodoAxios } from '../../api/apiGetTodo'
import CreateTodo from '../../components/todo/createTodo/CreateTodo'
import Todolist from '../../components/todo/todoList/Todolist'
import { TodoBox, TodoWrap } from './TodoStyle'

const Todo = () => {

  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    const toDodata = await getTodoAxios()
    setTodos(toDodata)
  }

  useEffect(()=>{
    getTodos()
  },[])

  return (
    <TodoWrap>
      <TodoBox>
        <CreateTodo getTodos={getTodos}/>
        <Todolist getTodos={getTodos} todos={todos} />
      </TodoBox>
    </TodoWrap>
  )
}

export default Todo