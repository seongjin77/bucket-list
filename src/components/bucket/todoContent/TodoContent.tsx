import React from "react";
import { TodoLi } from "./TodoContentStyle";
import IconButton from "@mui/material/IconButton";
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import EditIcon from '@mui/icons-material/Edit';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import Input from '@mui/material/Input';
import { useState } from "react";
import { deleteTodoAxios,UpdateAxios } from "../../../api/todo";
import { useInput } from "../../../hooks/useInput";
import { Todo } from "../bucketList/BucketList";



type PropsType = {
  item: Todo;
  getTodos: () => Promise<void>
}

const TodoContent = ({ item,getTodos }: PropsType) => {
  
    const [checked, setChecked] = useState(item.isCompleted);
    const [edit, setEdit] = useState(false);
    const [editText, editTextChange] = useInput(item.todo)
    const inputProp = { 'aria-label': 'editInput'};

    const handleCheckToggle = () => {
      setChecked(!checked)

      UpdateAxios(item.id,item.todo,!checked)
    };

    const toDoDelete = async () => {
      if(!window.confirm('삭제하시겠습니까?')){
        return
      }
      await deleteTodoAxios(item.id)
      getTodos();
    }

    // 수정 취소, 수정 버튼
    const handleEdit = () => {
      setEdit(!edit)
      editText.setInputValue(item.todo);

    }

    // 수정 완료 버튼
    const editComplete = async () => {
        if(!window.confirm('수정하시겠습니까?')){
          return
        }

       await UpdateAxios(item.id, editText.inputValue,checked)
        setEdit(!edit)
        getTodos();
    }
   
    return (
      <>
      {edit ? 
        <TodoLi
            secondaryAction={
              <>
                <IconButton onClick={editComplete} edge="end" aria-label="CompletedBtn">
                  <TaskAltIcon/>
                </IconButton>
                <IconButton onClick={handleEdit} edge="end" aria-label="cancelBtn">
                  <HighlightOffIcon/>
                </IconButton>
              </>
            }
            
            disablePadding
        >
            <ListItemButton
                role={undefined}
                dense
            >
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={checked}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ "aria-labelledby" : `${item.id}` }}
                        onClick={handleCheckToggle}
                    />
                </ListItemIcon>
                <Input value={editText.inputValue} onChange={editTextChange} inputProps={inputProp} />
            </ListItemButton>
        </TodoLi>
        :
        <TodoLi
        textdeco = { checked ? 'line-through' : 'initial'}
        secondaryAction={
          <>
            <IconButton onClick={handleEdit} edge="end" aria-label="modificationBtn">
              <EditIcon/>
            </IconButton>
            <IconButton onClick={toDoDelete} edge="end" aria-label="deleteBtn">
              <DeleteOutlineRoundedIcon/>
            </IconButton>
          </>
        }
        
        disablePadding
    >
        <ListItemButton
            role={undefined}
            onClick={handleCheckToggle}
            dense
        >
            <ListItemIcon>
                <Checkbox
                    edge="start"
                    checked={checked}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ "aria-labelledby": `${item.id}` }}
                />
            </ListItemIcon>
            <ListItemText id={`${item.id}`} primary={`${item.todo}`} />
        </ListItemButton>
    </TodoLi> }
      </>
    );
};

export default TodoContent;
