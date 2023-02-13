import React from "react";
import { TodoLi } from "./TodoContentStyle";
import IconButton from "@mui/material/IconButton";
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import EditIcon from '@mui/icons-material/Edit';
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
import { deleteTodoAxios } from "../../../api/apiDeleteTodo";

const TodoContent = ({ item,getTodos }) => {
    //console.log(item);
    // 2.수정기능 만들것.
    const [checked, setChecked] = useState(item.isCompleted);

    const handleToggle = () => () => {

      setChecked(!checked)
    };

    const toDoDelete = async (id) => {
      if(!window.confirm('삭제하시겠습니까?')){
        return
      }
      const res = await deleteTodoAxios(id)

      getTodos();
    }

    return (
        <TodoLi
            secondaryAction={
              <>
                <IconButton edge="end" aria-label="comments">
                  <EditIcon/>
                </IconButton>
                <IconButton onClick={()=>{toDoDelete(item.id)}} edge="end" aria-label="comments">
                  <DeleteOutlineRoundedIcon/>
                </IconButton>
              </>
            }
            
            disablePadding
        >
            <ListItemButton
                role={undefined}
                onClick={handleToggle()}
                dense
            >
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={checked}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ "aria-labelledby": item.id }}
                    />
                </ListItemIcon>
                <ListItemText id={item.id} primary={`${item.todo}`} />
            </ListItemButton>
        </TodoLi>
    );
};

export default TodoContent;
