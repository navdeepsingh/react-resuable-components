import React, {useRef, useEffect} from "react";
import {useThemeToggler} from "../../hooks/useThemeToggler";

import "./index.scss";

// Getting state & action through props is first step for resuable components
const DayNightSwitcher = () => {

  const [theme, toggleTheme] = useThemeToggler();

  const inputCheckbox = useRef(null);
  const parentElement = useRef(null);


  useEffect(() => {
    console.log('Trigger Renderer:' + theme)
    if (theme === 'bright') {
      parentElement.current.classList.remove('react-toggle--checked')
      inputCheckbox.current.setAttribute('aria-checked', 'false')
    } else {
      parentElement.current.classList.add('react-toggle--checked')
      inputCheckbox.current.setAttribute('aria-checked', 'true')
    }    
  }, [theme]);

  const handleFocus = () => {
    document.querySelector(".react-toggle").classList.add('react-toggle--focus');
  }

  const handleClick = () => {
    document.querySelector(".react-toggle").classList.add('react-toggle--focus');
    inputCheckbox.current.focus();
    toggleTheme();
  }

  const handleBlur = () => {  
    document.querySelector(".react-toggle").classList.remove('react-toggle--focus');
  }

  return(
    <>
      <div className="react-toggle react-toggle--checked"
        onClick={handleClick}
        ref={parentElement}
      >
        <div className="react-toggle-track">
          <div className="react-toggle-track-check">
            <span className="toggle_icon moon"></span>
          </div>
          <div className="react-toggle-track-x">
            <span className="toggle_icon sun"></span>
          </div>
        </div>
        <div className="react-toggle-thumb"></div>
        <input
          ref={inputCheckbox}
          type="checkbox"
          aria-label="Dark mode toggle"
          aria-checked="false"          
          className="react-toggle-screenreader-only"
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>
    </>
  )
}

export default DayNightSwitcher;