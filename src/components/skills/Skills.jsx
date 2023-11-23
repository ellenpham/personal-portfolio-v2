import React from 'react';
import {skills} from '../../Data';
import './skills.css';
import { Icon } from '@iconify/react';

const Skills = () => {
  return (
    <section className='skills section' id='skills'>
        <h2 className="section__title text-cs">Languages and Tools</h2>
        <p className="section__subtitle">
            My <span>Skills</span>
        </p>
        <p className="section_description">
            The technologies, skills and tools I am using for my projects with a guarantee of extensions in the near future.
        </p>

        <div className="skills__container container grid">
            {skills.map(({name, icon}, index) => {
                return (
                    <div className="skills__item">
                        <div className="skills__titles">
                            <h3 className="skills__name">{name}</h3>
                            <span className="skills__icon">
                                <Icon icon={icon} className="icon__image" />
                            </span>
                        </div>

                        <div className="skills__bar"></div>
                    </div>
                );
            })}
        </div>

        <div className="section__bg-wrapper">
            <span className="bg__title">Skills</span>
        </div>
    </section>
  )
}

export default Skills