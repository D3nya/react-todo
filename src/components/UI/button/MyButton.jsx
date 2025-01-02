import React from "react";

const MyButton = ({ children, className, ...props }) => {
  return (
    <button
      className={`${className} bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors`}
      {...props}
    >
      {children}
    </button>
  );
};

export default MyButton;
