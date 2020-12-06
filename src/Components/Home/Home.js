import { motion } from 'framer-motion';
import React from 'react';
import { useHistory } from 'react-router-dom';
import saha from '../../img/saha.jpg';
import { btnVariant, containerVariant, imgVariant, textVariant } from '../animation/Animation';
import ResumeBtn from '../ResumeBtn/ResumeBtn';
import './Home.css';


const Home = () => {
    const history = useHistory()
    return (
        <motion.div className='home'
        variants={containerVariant}
        initial='initial'
        animate='animate'
        exit='exit'
        >
            <motion.div className="img" variants={imgVariant}>
                <img src={saha} alt=""/>
            </motion.div>
            <motion.div className="bio">
                <motion.h1 variants={textVariant}>Shourov Saha</motion.h1>
                <motion.h5 variants={textVariant}>Full Stack Web Developer</motion.h5>
                <motion.p variants={textVariant}>A Highly motivated, self-teach developer with a deep interest in JavaScript. I specialize in pixel-perfect responsive design with Html5, CSS3, es6 JavaScript. I also have solid knowledge working with React, Redux, Redux-Thunk and server-side node.js, express.js, Mongoose.
                </motion.p>
                <motion.div className="action">
                    <ResumeBtn/>
                    <motion.button onClick={()=>history.push('/about')} variants={btnVariant} whileHover="whileHover" className="btn">About Me</motion.button>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Home;