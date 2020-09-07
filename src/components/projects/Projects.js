import React from 'react';
import Card from './card/Card';
import projectInfo from '../../assets/projectInfo';
import './projects.scss';

const Projects = () => {
  return (
    <div className='project-container'>
      <h2>My Projects</h2>
      <div className='projects'>
        {projectInfo.map((project) => {
          return <Card key={project.id} projectInfo={project} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
