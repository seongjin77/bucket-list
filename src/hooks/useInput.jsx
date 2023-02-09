import { useState } from "react";

export function useInput(initialValue){
  const [inputValue, setInputValue] = useState(initialValue);
  const [checkValidated, setCheckValidated] = useState(false);

  //console.log('유효성',checkValidated)

  // 유효성 검사
  const handleChange = (e) => {

    setInputValue(e.target.value)

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