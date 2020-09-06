import React from 'react';
import './card.scss';

const Card = ({ projectInfo }) => {
  console.log(projectInfo);
  return (
    <div className='card-container'>
      <h1>{projectInfo.title}</h1>
    </div>
  );
};

export default Card;
