import { Tooltip } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import WebIcon from '@material-ui/icons/Web';
import { motion } from 'framer-motion';
import React from 'react';
import svg from '../../../img/svg.svg';
import { btnVariant, imgVariant } from '../../animation/Animation';
import './Card.css';

const Card = ({data}) => {
    const { name, img, description, techList, live, clientSide, serverSide}=data
    return (
        <div className='project'>
            <motion.div className="project-img">
                <Tooltip title="Live Side" aria-label="Live Side">
                    <a className='big-img' href={live} rel="noreferrer" target="_blank">
                        <motion.img variants={imgVariant} src={img} alt=""/>
                    </a>
                </Tooltip>
            </motion.div>
            <motion.div className="project-info" 
                variants={btnVariant}
            >
                <h2>{name}</h2>
                <div className='description'>
                    {
                        description.map(skill=>
                        <li key={skill}>
                            <img src={svg} alt=">>"/>
                             {skill}
                        </li>)
                    }
                </div>
                <div className='techList'>
                    {
                        techList.map(skill=><li key={skill}>{skill}</li>)
                    }
                </div>
                <div className="icons">
                <Tooltip title="Live Side" aria-label="Live Side">
                    <a href={live} rel="noreferrer" target="_blank">
                        <WebIcon className='icon'/>
                    </a>
                </Tooltip>
                <Tooltip title="FontEnd Repository" aria-label="Live Side">
                    <a href={clientSide} rel="noreferrer" target="_blank">
                        <GitHubIcon className='icon'/>
                    </a>
                </Tooltip>
                {
                    serverSide &&
                    <Tooltip title="Backend Repository" aria-label="Live Side">
                        <a href={serverSide} rel="noreferrer" target="_blank">
                            <GitHubIcon className='icon'/>
                        </a>
                    </Tooltip>
                }
                </div>
            </motion.div>
        </div>
    );
};

export default Card;