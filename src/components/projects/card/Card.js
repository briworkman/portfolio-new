import React from 'react';
import './card.scss';
import Image from '../image/Image';
import github from '../../../assets/images/github-brands.svg';
import launch from '../../../assets/images/rocket-launch-solid.svg';

const Card = ({ projectInfo }) => {
  console.log(projectInfo);
  return (
    <div className='card-container'>
      <Image source={projectInfo.img.map((img) => img)} />
      <h1>{projectInfo.title}</h1>
      <div className='icon-links'>
        <a
          href={projectInfo.github_url}
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={github} alt='View GitHub Repository' className='link' />
        </a>
        <a
          href={projectInfo.live_url}
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={launch} alt='View Live' className='link' />
        </a>
      </div>
    </div>
  );
};

export default Card;
