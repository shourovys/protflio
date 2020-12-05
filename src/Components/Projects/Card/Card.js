import { Tooltip } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import WebIcon from '@material-ui/icons/Web';
import React from 'react';
import svg from '../../../img/svg.svg';
import './Card.css';
const Card = ({data}) => {
    const { name, img, description, techList, live, clientSide, serverSide}=data
    return (
        <div className='project'>
            <div className="project-img">
                <Tooltip title="Live Side" aria-label="Live Side">
                    <a className='big-img' href={live} rel="noreferrer" target="_blank">
                        <img src={img} alt=""/>
                    </a>
                </Tooltip>
            </div>
            <div className="project-info">
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
                <Tooltip title="Backend Repository" aria-label="Live Side">
                    <a href={serverSide} rel="noreferrer" target="_blank">
                        <GitHubIcon className='icon'/>
                    </a>
                </Tooltip>
                </div>
            </div>
        </div>
    );
};

export default Card;