import React, { useRef, useEffect } from "react";
import { useThemeToggler } from "../../hooks/use-theme-toggler";
import "./index.scss";
const DayNightSwitcher = () => {
    const [theme, toggleTheme] = useThemeToggler();
    const inputCheckbox = useRef(null);
    const parentElement = useRef(null);
    useEffect(() => {
        console.log('Trigger Renderer:' + theme);
        if (theme === 'bright') {
            parentElement.current.classList.remove('react-toggle--checked');
            inputCheckbox.current.setAttribute('aria-checked', 'false');
        }
        else {
            parentElement.current.classList.add('react-toggle--checked');
            inputCheckbox.current.setAttribute('aria-checked', 'true');
        }
    }, [theme]);
    const handleFocus = () => {
        document.querySelector(".react-toggle").classList.add('react-toggle--focus');
    };
    const handleClick = () => {
        document.querySelector(".react-toggle").classList.add('react-toggle--focus');
        inputCheckbox.current.focus();
        toggleTheme();
    };
    const handleBlur = () => {
        document.querySelector(".react-toggle").classList.remove('react-toggle--focus');
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "react-toggle react-toggle--checked", onClick: handleClick, ref: parentElement },
            React.createElement("div", { className: "react-toggle-track" },
                React.createElement("div", { className: "react-toggle-track-check" },
                    React.createElement("span", { className: "toggle_icon moon" })),
                React.createElement("div", { className: "react-toggle-track-x" },
                    React.createElement("span", { className: "toggle_icon sun" }))),
            React.createElement("div", { className: "react-toggle-thumb" }),
            React.createElement("input", { ref: inputCheckbox, type: "checkbox", "aria-label": "Dark mode toggle", "aria-checked": "false", className: "react-toggle-screenreader-only", onFocus: handleFocus, onBlur: handleBlur }))));
};
export default DayNightSwitcher;
