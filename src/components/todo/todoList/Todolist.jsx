import React from "react";
import TodoContent from "../todoContent/TodoContent";
import { TodoListWrap } from "./TodolistStyle";

const Todolist = ({ todos,getTodos }) => {
    
    // item 값 프롭스로 내려주기
    return (
        <TodoListWrap>
            {todos.map((item) => (
                <TodoContent
                    key={item.id}
                    item={item}
                    getTodos={getTodos}
                />
            ))}
        </TodoListWrap>
    );
};

export default Todolist;
