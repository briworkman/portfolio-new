import React from 'react';
import './button.scss';

function Button(props) {
  return (
    <button className={props.class === 'dark' ? 'btn-dark' : 'btn-light'}>
      {props.text}
    </button>
  );
}

export default Button;
