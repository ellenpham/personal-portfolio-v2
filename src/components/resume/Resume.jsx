import React from 'react';
import { cv } from '../../Data';
import Card from './Card';
import './resume.css';

const Resume = () => {
  return (
    <section className='resume section' id='resume'>
      <h2 className="section__title text-cs">Resume</h2>
        <p className="section__subtitle">
            My <span>History</span>
        </p>
        <p className="section_description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        </p>

        <div className="resume__container container grid">
          <div className="resume__group">
            <h3 className="resume__heading">Education</h3>
            <div className="resume__items">
              {cv.map((value, id) => {
                if (value.category === 'education') {
                  return (
                    <Card 
                      key={id} 
                      title={value.title} 
                      subtitle={value.subtitle}
                      date={value.date}
                      description={value.description} 
                    />
                  );
                }
              })}
            </div>
          </div>

          <div className="resume__group">
            <h3 className="resume__heading">Experience</h3>
            <div className="resume__items">
              {cv.map((value, id) => {
                if (value.category === 'experience') {
                  return (
                    <Card 
                      key={id} 
                      title={value.title} 
                      subtitle={value.subtitle}
                      date={value.date}
                      description={value.description} 
                    />
                  );
                }
              })}
            </div>
          </div>

        </div>
    </section>
  )
}

export default Resume;