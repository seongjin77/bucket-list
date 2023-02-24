import React from "react";
import TodoContent from "../todoContent/TodoContent";
import { BucketListWrap } from "./BucketListStyle";

const BucketList = ({ todos,getTodos }) => {
    
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
