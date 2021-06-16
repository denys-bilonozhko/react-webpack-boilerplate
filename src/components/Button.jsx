import React from 'react';
import './Button.css';

const Button = (props) => {
  return (
    <button className="button" onClick={props.toggle}>
      {props.children}
    </button>
  );
};

export default Button;