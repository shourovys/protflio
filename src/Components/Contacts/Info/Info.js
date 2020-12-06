import { motion } from 'framer-motion';
import React from 'react';
import { textVariant } from '../../animation/Animation';
import './Info.css';

const Info = () => {
    return (
            <motion.div className='info-container' variants={textVariant}>
                <div>
                    <div className="key">Name:</div>
                    <div className="value">Shouov Saha</div>
                </div>
                <div>
                    <div className="key">Phome:</div>
                    <div className="value">01720154149</div>
                </div>
                <div>
                    <div className="key">Email:</div>
                    <div className="value">Shourovys@gmail.com</div>
                </div>
                <div>
                    <div className="key">Home:</div>
                    <div className="value">Tangail, Dhaka</div>
                </div>
            </motion.div>
    );
};

export default Info;