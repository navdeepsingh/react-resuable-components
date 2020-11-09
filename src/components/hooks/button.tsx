import {useState, useEffect} from 'react';

export const useOnClickButton = () => {
  const [buttonState, setButtonState] = useState(0);
  useEffect(
    () => {
      setButtonState(1);
    },[buttonState]
  )
  return buttonState;
}