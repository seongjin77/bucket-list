import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { getTodoAxios } from '../../../api/apiGetTodo';
// import useGetTodo from '../../../hooks/useGetTodo';
import TodoContent from '../todoContent/TodoContent';
import { TodoListWrap } from './TodolistStyle'

const Todolist = ({todos}) => {

     
  // item 값 프롭스로 내려주기
  return (
   <TodoListWrap>
    {todos.map(item => <TodoContent key={item.id} {...item}/>)}
   </TodoListWrap>
  )
}

export default Todolist