import React from "react";

const Card = ({ children }) => {
  return (
    <div className="p-4 shadow-normal rounded-[14px] bg-white">{children}</div>
  );
};

export default Card;
