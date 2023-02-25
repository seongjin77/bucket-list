import { useRef, useState } from "react";

export function useInput(initialValue,validator){
  const [inputValue, setInputValue] = useState(initialValue);
  const validateResult = useRef( {value : false} )
  // input값 변경 함수
  const handleChange = (e) => {
    setInputValue(e.target.value)
    // 유효성 검사
    validateResult.current = validator(e.target.value)
  }

  return [{inputValue,setInputValue},handleChange,validateResult.current]
}