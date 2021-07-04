import { motion } from 'framer-motion';
import React from 'react';
import cv from '../../img/Shourov_Saha_CV.pdf';
import { btnVariant } from '../animation/Animation';

const ResumeBtn = () => {
    return (
        <a href={cv} download >
            <motion.button variants={btnVariant} whileHover="whileHover" className="resume-btn">Get Resume</motion.button>
        </a>
        
    );
};

export default ResumeBtn;