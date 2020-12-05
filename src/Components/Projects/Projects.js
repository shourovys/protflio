import React from 'react';
import Card from './Card/Card';
import { projectsData } from './ProjectData';
import './Projects.css';

const Projects = () => {

    return (
        <div className="project-container">
            <div className='projects'>
            <h1>My Projects</h1>
                {
                    projectsData.map(data=><Card data={data} key={data.id}/>)
                }
            </div>
        </div>
    );
};

export default Projects;