import { motion } from 'framer-motion';
import React from 'react';
import { containerVariant } from '../animation/Animation';
import './Contacts.css';
import Form from './Form/Form';
import Info from './Info/Info';


const Contacts = () => {
    return (
        <motion.div className="contacts-container"
        variants={containerVariant}
        initial='initial'
        animate='animate'
        exit='exit'
        >
            <div className="contacts">
                <div className="form">
                    <h1>Send A Massage</h1>
                    <Form/>
                </div>
                <div className="info">
                <h1>Contacts Info</h1>
                    <Info/>
                </div>
            </div>
        </motion.div>
    );
};

export default Contacts;