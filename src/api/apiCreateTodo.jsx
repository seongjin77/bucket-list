import { axiosAuthApi } from "./apiAxios"

const createTodoAxios = async (body) => {
  try{
    const res = await axiosAuthApi.post('/todos',body)
    
    return res
  }
  catch(error){
      console.log('createTodoAxios',error)
      return error.response;
    
  }
}

export {createTodoAxios}