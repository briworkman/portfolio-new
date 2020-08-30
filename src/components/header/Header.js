import React from 'react';

// component imports
import Heading from '../heading/Heading';
import Paragraph from '../paragraph/Paragraph';
import Button from '../button/Button';

import './header.scss';

function Header() {
  return (
    <div className='header-container'>
      <section className='heading'>
        <>
          <Heading />
          <Paragraph />
          <div className='button-container'>
            <Button class={'dark'} text={'Resume'} />
            <Button class={'light'} text={'Get in Touch'} />
          </div>
        </>
      </section>
    </div>
  );
}

export default Header;
