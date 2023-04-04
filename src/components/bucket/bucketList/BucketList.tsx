import { type } from "os";
import React from "react";
import TodoContent from "../todoContent/TodoContent";
import { BucketListWrap } from "./BucketListStyle";

// ```typescript
// // Todo 타입 정의
// export type Todo = {
//     id: number;
//     todo: string;
//     isCompleted: boolean;
//     userId: number;
// }

// // PropsType 타입 정의
// type PropsType = {
//     todos: Todo[]; // Todo 배열
//     getTodos: () => Promise<void>; // 비동기 함수
// }

// // BucketList 컴포넌트 정의
// const BucketList = ({ todos, getTodos }: PropsType) => {
//     return (
//         <BucketListWrap>
//             {todos.map((item) => (
//                 <TodoContent
//                     key={item.id}
//                     item={item}
//                     getTodos={getTodos}
//                 />
//             ))}
//         </BucketListWrap>
//     );
// };
// ```

// 좋은 점:
// - `Todo` 타입을 정의하여 코드 가독성을 높임
// - `PropsType` 타입을 정의하여 `todos`와 `getTodos`의 타입을 명시적으로 지정하여 코드 가독성을 높임
// - `BucketList` 컴포넌트는 `todos`와 `getTodos`를 props로 받아와서 사용하므로, 재사용성이 높아짐

// 나쁜 점:
// - `BucketList` 컴포넌트의 역할이 불분명함. `BucketListWrap` 컴포넌트를 렌더링하는 역할만 수행하므로, 컴포넌트 이름이 적절하지 않음
// - `getTodos` 함수가 비동기 함수임에도 불구하고, `async` 키워드가 사용되지 않음. 따라서, `getTodos` 함수를 사용하는 부분에서 `await` 키워드를 사용하지 않으면 에러가 발생할 수 있음
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
