import React from 'react';
import './card.scss';
import Image from '../image/Image';

const Card = ({ projectInfo }) => {
  console.log(projectInfo);
  return (
    <div className='card-container'>
      <Image source={projectInfo.img.map((img) => img)} />
      <h1>{projectInfo.title}</h1>
    </div>
  );
};

export default Card;
