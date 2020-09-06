import React from 'react';
import Card from './card/Card';
import projectInfo from '../../assets/projectInfo';

const Projects = () => {
  return (
    <div>
      {projectInfo.map((project) => {
        return <Card key={project.id} projectInfo={project} />;
      })}
    </div>
  );
};

export default Projects;
