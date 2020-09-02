import React from 'react';
import './icon.scss';

//icon imports
import angular from '../../assets/images/angular-logo.svg';

const Icon = () => {
  return (
    <div>
      <img src={angular} className='icon' />
    </div>
  );
};

export default Icon;
