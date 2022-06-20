import React from "react";

const Button = ({ type, children, onClick, className }) => {
  return (
    <div className={"btn " + type + " " + className} onClick={onClick}>
      {children}
    </div>
  );
};

export default Button;
