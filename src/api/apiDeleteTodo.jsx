import { axiosAuthApi } from "./apiAxios"

const deleteTodoAxios = async (Id) => {
  try {
    const res = await axiosAuthApi.delete(`/todos/${Id}`)

    return res

  } catch (error) {
    console.log(error);
  }
}
export {deleteTodoAxios}