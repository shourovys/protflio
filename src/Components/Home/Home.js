import React from 'react';
import me from '../../img/me.jpg';
import ResumeBtn from '../ResumeBtn/ResumeBtn';
import './Home.css';

const Home = () => {
    return (
        <div className='home'>
            <div className="img">
                <img src={me} alt=""/>
            </div>
            <div className="bio">
                <h1>Shourov Saha</h1>
                <h5>Full Stack Web Developer</h5>
                <p>A Highly motivated, self-teach developer with a deep interest in JavaScript. I specialize in pixel-perfect responsive design with Html5, CSS3, es6 JavaScript. I also have solid knowledge working with React, Redux, Redux-Thunk and server-side node.js, express.js, Mongoose.
                </p>
                <div className="action">
                    <ResumeBtn/>
                    <button className="btn">About Me</button>
                </div>
            </div>
        </div>
    );
};

export default Home;