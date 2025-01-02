import React from "react";

const MyInput = ({ className, ...props }) => {
  return (
    <input
      className={`${className} px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500  focus:border-blue-500`}
      {...props}
    />
  );
};

export default MyInput;
