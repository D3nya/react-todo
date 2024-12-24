import React from 'react';
import { title, title_margin, text, text_margin } from './Header.module.css';

const Header = () => {
  return (
    <>
      <h1 className={`${title} ${title_margin}`}>It is simple To Do App</h1>
      <p className={`${text} ${text_margin}`}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
        reprehenderit dolore eaque maiores, officiis temporibus? Corporis,
        nostrum totam tempora error obcaecati doloribus reiciendis, ea ex quis
        molestiae repudiandae asperiores deserunt.
      </p>
    </>
  );
};

export default Header;
