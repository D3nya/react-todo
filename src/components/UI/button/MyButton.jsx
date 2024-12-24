import React from 'react';
import { btn } from './MyButton.module.css';

const MyButton = ({ children, className, ...props }) => {
  return (
    <button className={`${className} ${btn}`} {...props}>
      {children}
    </button>
  );
};

export default MyButton;
