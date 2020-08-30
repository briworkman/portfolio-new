import React from 'react';
import './headerimg.scss';

import headerImg from '../../assets/images/header-img.svg';

function HeaderImg() {
  return (
    <div className='header-img-container'>
      <img src={headerImg} className='header-img' alt='header' />
    </div>
  );
}

export default HeaderImg;
