import { axiosAuthApi } from "./client";

const getTodoAxios = async () => {
    try {
        const res = await axiosAuthApi.get("/todos");

        return res.data;
    } catch (error) {
        console.log(error);
    }
};

const createTodoAxios = async (body: string) => {
  try{
    const res = await axiosAuthApi.post('/todos',{body})
    
    return res
  }
  catch(error){
      console.log('createTodoAxios',error)
      return error;
    
  }
}


const deleteTodoAxios = async (Id : number) => {
  try {
      const res = await axiosAuthApi.delete(`/todos/${Id}`);

      return res;
  } catch (error) {
      console.log(error);
  }
};

const UpdateAxios = async (Id: number, body: string) => {
  try {
      const res = await axiosAuthApi.put(`/todos/${Id}`, body);

      return res;
  } catch (error) {
      console.log(error);
  }
};

export { getTodoAxios,createTodoAxios,deleteTodoAxios,UpdateAxios };