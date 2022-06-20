import React from "react";

const Button = ({ type, children, onClick }) => {
  return (
    <div className={"btn " + type} onClick={onClick}>
      {children}
    </div>
  );
};

export default Button;
