import { motion } from 'framer-motion';
import React from 'react';
import { useHistory } from 'react-router-dom';
import saha from '../../img/saha.jpg';
import { btnVariant, textVariant } from '../animation/Animation';
import ResumeBtn from '../ResumeBtn/ResumeBtn';
import './Home.css';

const containerVariant = {
    initial: {

    },
    animate: {

      transition: { duration: .1, when: 'beforeChildren', staggerChildren: 1, type: 'spring', stiffness: 30 }
    },
    exit: {
      x: '-100vw',
      transition: { ease: 'easeInOut', duration: .5 }
    }
  }

const Home = () => {
    const history = useHistory()
    return (
        <motion.div className='home'
        variants={containerVariant}
        initial='initial'
        animate='animate'
        exit='exit'
        >
            <motion.div className="img" s>
                <motion.img variants={textVariant} src={saha} alt=""/>
            </motion.div>
            <div className="bio">
                <motion.div className ='bio-info'  variants={textVariant}>
                    <motion.h1 >Shourov Saha</motion.h1>
                    <motion.h5 >Full Stack Web Developer</motion.h5>
                    <motion.p >A Highly motivated, self-teach developer with a deep interest in JavaScript. I specialize in pixel-perfect responsive design with Html5, CSS3, es6 JavaScript. I also have solid knowledge working with React, Redux, Redux-Thunk and server-side node.js, express.js, Mongoose.
                    </motion.p>
                </motion.div>
                <motion.div className="action">
                    <ResumeBtn/>
                    <motion.button onClick={()=>history.push('/projects')} variants={btnVariant} whileHover="whileHover" className="btn">My Projects</motion.button>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Home;