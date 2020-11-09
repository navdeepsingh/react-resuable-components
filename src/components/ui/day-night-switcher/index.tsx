import React, {useRef} from "react";
import {useThemeToggler} from "../../hooks/useThemeToggler";

import "./index.scss";

// Getting state & action through props is first step for resuable components

const DayNightSwitcher = () => {
  const [theme, toggleTheme] = useThemeToggler();
  const inputCheckbox = useRef(null);
  const parentElement = useRef(null);

  return(
    <>
      <div className="react-toggle react-toggle--checked"
        onClick={toggleTheme}
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
        />
      </div>
    </>
  )
}

export default DayNightSwitcher;