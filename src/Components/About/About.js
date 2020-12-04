import React from 'react';
import me from '../../img/me.jpg';
import './About.css';

const skillList=['JavaScript','ES6','React.js','Node.js','Redux','React-Redux','Redux-Thunk','Express.js','MongoDB','Mongoose','Git','Github','NPM','VS Code','REST API','Firebase']
const workList =['JavaScript','React.js','Node.js','Redux','Express.js','MongoDB','Mongoose']

const About = () => {
    return (
        <div className="about-container">
            <div className="about">
            <div className="about-me">
                    <img src={me} alt=""/>
                    <h1><span className='small'>I'm &nbsp;</span>Shourov Saha</h1>
                    <p>A Highly motivated, self-teach developer with a deep interest in JavaScript. I specialize in pixel-perfect responsive design with Html5, CSS3, es6 JavaScript. I also have solid knowledge working with React, Redux, Redux-Thunk and server-side node.js, express.js, Mongoose.
                    </p>
            </div>
            <div className="about-skill">
                <div className="my-skill">
                    <h1>My Skills Set</h1>
                    <div className='skill-container'>
                        {
                            skillList.map(skill=><li key={skill}>{skill}</li>)
                        }
                    </div>
                </div>
                <div className="work-with">
                    <h1>I want to work with</h1>
                    <div className='skill-container'>
                        {
                            workList.map(skill=><li key={skill}>{skill}</li>)
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default About;