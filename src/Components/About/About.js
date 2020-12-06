import { motion } from 'framer-motion';
import React from 'react';
import me from '../../img/saha.jpg';
import { btnVariant, containerVariant, textVariant } from '../animation/Animation';
import './About.css';

const skillList=['JavaScript','ES6','React.js','Node.js','Redux','React-Redux','Redux-Thunk','Express.js','MongoDB','Mongoose','Git','Github','NPM','VS Code','REST API','Firebase']
const workList =['JavaScript','React.js','Next.js','Redux','Node.js','Express.js','MongoDB','Mongoose']

const About = () => {
    return (
        <motion.div className="about-container"
        variants={containerVariant}
        initial='initial'
        animate='animate'
        exit='exit'
        >
            <div className="about">
            <div className="about-me">
                    <motion.img src={me} alt=""/>
                    <h1><motion.span variants={textVariant} className='small'>I'm &nbsp;</motion.span>Shourov Saha</h1>
                    <motion.p variants={textVariant}>A Highly motivated, self-teach developer with a deep interest in JavaScript. I specialize in pixel-perfect responsive design with Html5, CSS3, es6 JavaScript. I also have solid knowledge working with React, Redux, Redux-Thunk and server-side node.js, express.js, Mongoose.
                    </motion.p>
            </div>
            <div className="about-skill">
                <div className="my-skill">
                    <h1>My Skills Set</h1>
                    <motion.div variants={textVariant} className='skill-container'>
                        {
                            skillList.map(skill=><li key={skill}>{skill}</li>)
                        }
                    </motion.div>
                </div>
                <div className="work-with">
                    <h1>I want to work with</h1>
                    <motion.div  className='skill-container'>
                        {
                            workList.map(skill=><motion.li variants={btnVariant} key={skill}>{skill}</motion.li>)
                        }
                    </motion.div>
                </div>
            </div>
        </div>
    </motion.div>
    );
};

export default About;