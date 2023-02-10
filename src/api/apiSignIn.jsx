import { axiosApi } from "./apiAxios"

const signInAxios = async (body) => {
  try{
    const res = await axiosApi.post('/auth/signin',body);
    console.log('로그인 응답', res);
    return res

  } catch(error){ 
    console.log(error);
    alert('console에서 에러 메세지를 확인해주세요')
  }

}

export {signInAxios}