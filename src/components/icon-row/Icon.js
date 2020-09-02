import React from 'react';
import './icon.scss';

const Icon = ({ source }) => {
  return (
    <div>
      <img src={source} className='icon' alt='stack icon' />
    </div>
  );
};

export default Icon;
