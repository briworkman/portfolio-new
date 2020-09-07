import React from 'react';
import './image.scss';

const Image = ({ source }) => {
  return (
    <div className='project-gif'>
      <img src={source} alt='Project Gif' />
    </div>
  );
};

export default Image;
