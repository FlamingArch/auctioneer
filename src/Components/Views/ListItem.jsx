import React from "react";

const ListItem = ({ children, onClick }) => {
  return (
    <div className="list-item" onClick={onClick}>
      {children}
    </div>
  );
};

export default ListItem;
