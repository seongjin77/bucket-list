import { axiosAuthApi } from "./apiAxios"

const createTodoAxios = async (body) => {
  try{
    const res = await axiosAuthApi.post('/todos',body)
    console.log('응답 확인', res);
    return res
  }
  catch(error){
    console.log(error);
  }
}

export {createTodoAxios}