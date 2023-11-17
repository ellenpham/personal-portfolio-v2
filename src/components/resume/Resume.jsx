import React from 'react'

const Resume = () => {
  return (
    <section className='resume section' id='resume'>
      <h2 className="section__title text-cs">Resume</h2>
        <p className="section__subtitle">
            My <span>Story</span>
        </p>
        <p className="section_description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        </p>

        <div className="resume__container container grid">
          <div className="resume__group">
            <h3 className="resume__heading">Education</h3>
            <div className="resume__items"></div>
          </div>
        </div>
    </section>
  )
}

export default Resume;