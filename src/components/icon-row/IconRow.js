import React from 'react';
import Icon from './Icon';
import './icon-row.scss';

//icon imports
import angular from '../../assets/images/angular-logo.svg';
import react from '../../assets/images/react-icon.svg';
import node from '../../assets/images/node-icon.svg';
import typescript from '../../assets/images/typescriptlang-icon.svg';
import javascript from '../../assets/images/javascript-icon.svg';

const IconRow = () => {
  let icons = [angular, react, node, typescript, javascript];
  return (
    <div className='icon-row-container'>
      {icons.map((icon) => {
        return <Icon source={icon} key={icon} />;
      })}
    </div>
  );
};

export default IconRow;
