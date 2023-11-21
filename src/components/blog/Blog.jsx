import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Blog = () => {
  return (
    <section className='blog section' id='blog'>
        <h2 className="section__title text-cs">Latest Blog</h2>
        <p className="section__subtitle">
            My <span>Articles and Stories</span>
        </p>
        <p className="section_description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        </p>

        <div className='blog__container container grid'>
            <div className='blog__item card card-two'>
                <span className='blog-date text-cs'>OCTOBER 31, 2022</span>
                <h3 className="blog__title">The Main Thing For The Designer</h3>
                <p className="blog__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Purus in mollis nunc sed id semper. Urna nunc id cursus metus aliquam eleifend mi in nulla...
                </p>
            </div>
        </div>
    </section>
  )
}

export default Blog