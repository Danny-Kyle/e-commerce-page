import React from "react";

const FunctionButtons = ({ src, onClick }) => {
  return (
    <button onClick={() => onClick()}>
      <img src={src} alt="" />
    </button>
  );
};

export default FunctionButtons;
