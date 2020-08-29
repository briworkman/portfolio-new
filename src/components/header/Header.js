import React from 'react';

// component imports
import Heading from '../heading/Heading';
import Paragraph from '../paragraph/Paragraph';

import './header.scss';

function Header() {
  return (
    <div className='header-container'>
      <Heading />
      <Paragraph />
    </div>
  );
}

export default Header;
