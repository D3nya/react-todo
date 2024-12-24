import React from 'react';
import { inp } from './MyInput.module.css';

const MyInput = ({ className, ...props }) => {
  return <input className={`${className} ${inp}`} {...props} />;
};

export default MyInput;
