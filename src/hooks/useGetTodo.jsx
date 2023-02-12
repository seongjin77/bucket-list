import React from 'react'
import { useState } from 'react'
import { getTodoAxios } from '../api/apiGetTodo';

const useGetTodo = () => {

  const [todos,setTodos] = useState([]);

  const getTodos = async () => {
    const res = await getTodoAxios();
    setTodos(res.data)

    return res.data
  }

  return [todos,getTodos]
}

export default useGetTodo