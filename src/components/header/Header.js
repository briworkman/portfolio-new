import React from 'react';

// component imports
import Heading from '../heading/Heading';
import Paragraph from '../paragraph/Paragraph';
import Button from '../button/Button';
import HeaderImg from '../header-img/HeaderImg';
import IconRow from '../icon-row/IconRow';

import './header.scss';

const Header = () => {
  return (
    <div className='header-container'>
      <section className='heading'>
        <div className='heading-section'>
          <Heading />
          <Paragraph />
          <div className='button-container'>
            <Button class={'dark'} text={'Resume'} />
            <Button class={'light'} text={'Get in Touch'} />
          </div>
          <IconRow />
        </div>
        <div className='img-section'>
          <HeaderImg />
        </div>
      </section>
    </div>
  );
};

export default Header;
