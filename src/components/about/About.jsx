import React, { useState } from 'react';
import Stories from './Stories';
import storiesData from '../../Data';

import './about.css';

const About = () => {

    const [stories, setStories] = useState(storiesData);

    return (
        <section className='about section' id='about'>
            <h2 className="section__title text-cs">About Me</h2>
            <p className="section__subtitle">
                My <span>Story</span>
            </p>
            <p className="section__description">
            Get to know more about me and the journey to where I am today. 
            </p>

            <Stories stories={storiesData}/>

            <div className="section__bg-wrapper">
                <span className="bg__title">About Me</span>
            </div>
        </section>
    )
}

export default About;