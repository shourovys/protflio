import { motion } from 'framer-motion';
import React from 'react';
import { btnVariant } from '../animation/Animation';
import cv from '../../img/cv.pdf'

const ResumeBtn = () => {
    return (
        <a href={cv} download >
            <motion.button variants={btnVariant} whileHover="whileHover" className="resume-btn">Get Resume</motion.button>
        </a>
        
    );
};

export default ResumeBtn;