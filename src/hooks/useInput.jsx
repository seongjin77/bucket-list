import { useState } from "react";

export function useInput(initialValue){
  const [inputValue, setInputValue] = useState(initialValue);
  const [checkValidated, setCheckValidated] = useState(false);

  // input값 변경 함수
  const handleChange = (e) => {
    setInputValue(e.target.value)
    // 유효성 검사
    if(e.target.id === 'email' && e.target.value.includes('@')) {
      setCheckValidated(true)
    }
    else if(e.target.id === 'email' && e.target.value === ''){
      setCheckValidated(false)
    }
    else if(e.target.id === 'password' && e.target.value.length >= 8){
      setCheckValidated(true)
    }
    else if(e.target.id === 'password' && e.target.value === ''){
      setCheckValidated(false)
    }
    else{
      setCheckValidated(false)
    }
  }

  return [inputValue,handleChange,checkValidated]
}