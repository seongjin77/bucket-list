import { axiosApi } from "./client";

const signUpAxios = async (body) => {
    try {
        const res = await axiosApi.post("/auth/signup", body);

        return res;
    } catch (error) {
        console.log(error);
        alert("콘솔 창에서 에러 메세지를 확인해주세요");
    }
};

const signInAxios = async (body) => {
  try{
    const res = await axiosApi.post('/auth/signin',body);
    return res

  } catch(error){ 
    console.log(error);
    alert('console에서 에러 메세지를 확인해주세요')
  }

}

export { signUpAxios,signInAxios };