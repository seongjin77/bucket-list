import { axiosApi } from "./apiSignUp"

const signUpAxios = async (body) => {
  try{
    const res = await axiosApi.post('/auth/signup',body);

    return res

  } catch(error){ 
    console.log(error);
    alert('console에서 에러 메세지를 확인해주세요')
  }

}

export {signUpAxios}