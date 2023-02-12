import React from 'react'

const TodoContent = (props) => {
   console.log(props)
  return (
    <div>{props.todo}</div>
  )
}

export default TodoContent