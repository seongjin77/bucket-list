import { axiosApi } from "./apiSignUp"

const signUpAxios = async (body) => {
  try{
    const res = await axiosApi.post('/auth/signup',body);
    console.log('응답',res)

    return res

  } catch(error){
    console.log(error);
  }

}

export {signUpAxios}