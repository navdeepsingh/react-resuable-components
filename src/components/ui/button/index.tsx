import React, { MouseEventHandler } from "react";
import classNames from "classnames";

import "./index.scss";

type ButtonProps = {
  children: React.ReactChildren | string | React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: MouseEventHandler;
};

const Button = ({ className, children, type, onClick }: ButtonProps) => {
  return (
    <button
      type={type}
      className={classNames(className, 'buttonClass')}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;