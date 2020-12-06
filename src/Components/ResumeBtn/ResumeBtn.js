import { motion } from 'framer-motion';
import React from 'react';
import { btnVariant } from '../animation/Animation';

const ResumeBtn = () => {
    return (
        <a href='https://docs.google.com/document/d/1pFWTC4aB4qPYedsos-RYoiMOmQEWUjaDRrX3xFPBeA0/edit?usp=sharing' rel="noreferrer" target="_blank">
            <motion.button variants={btnVariant} whileHover="whileHover" className="resume-btn">Get Resume</motion.button>
        </a>
        
    );
};

export default ResumeBtn;