import { type } from "os";
import React from "react";
import TodoContent from "../todoContent/TodoContent";
import { BucketListWrap } from "./BucketListStyle";

export type Todo = {
    id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

type PropsType = {
    todos: Todo[];
    getTodos: () => Promise<void>;
}

const BucketList = ({ todos,getTodos }: PropsType) => {
    
    return (
        <BucketListWrap>
            {todos.map((item) => (
                <TodoContent
                    key={item.id}
                    item={item}
                    getTodos={getTodos}
                />
            ))}
        </BucketListWrap>
    );
};

export default BucketList;
