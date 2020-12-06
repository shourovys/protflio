import { motion } from 'framer-motion';
import React from 'react';
import Card from './Card/Card';
import { projectsData } from './ProjectData';
import './Projects.css';

const containerVariant = {
    initial: {
      opacity: 0,
      y: '-5vw'
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: .1, when: 'beforeChildren', staggerChildren: 1, type: 'spring', stiffness: 30 }
    },
    exit: {
      x: '-100vw',
      transition: { ease: 'easeInOut', duration: .5 }
    }
  }

const Projects = () => {

    return (
        <motion.div className="project-container"
        variants={containerVariant}
        initial='initial'
        animate='animate'
        exit='exit'
        >
            <div className='projects'>
            <h1>My Projects</h1>
                {
                    projectsData.map(data=><Card data={data} key={data.id}/>)
                }
            </div>
        </motion.div>
    );
};

export default Projects;