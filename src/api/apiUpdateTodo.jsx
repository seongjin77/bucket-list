import { axiosAuthApi } from "./apiAxios";

const UpdateAxios = async (Id,body) => {
  
  try {
    const res = await axiosAuthApi.put(`/todos/${Id}`,body);
    
    return res

  } catch (error) {
    console.log(error);
  }

}

export {UpdateAxios}