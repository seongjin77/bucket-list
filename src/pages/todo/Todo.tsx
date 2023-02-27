import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { getTodoAxios } from '../../api/todo'
import CreateTodo from '../../components/bucket/createTodo/CreateTodo'
import BucketList from '../../components/bucket/bucketList/BucketList'
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
        <BucketList getTodos={getTodos} todos={todos} />
      </TodoBox>
    </TodoWrap>
  )
}

export default Todo