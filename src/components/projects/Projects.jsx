import React from 'react';
import { projects } from '../../Data';
import { FaArrowRight } from 'react-icons/fa';
import shapeTwo from "../../assets/shape-2.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

import './projects.css';

const Projects = () => {
  return (
    <section className="projects section" id="projects">
        <h2 className="section__title text-cs">Key Projects</h2>
        <p className="section__subtitle">
            My <span>Work</span>
        </p>
        <p className="section__description">
            Here are some of the projects I've undertaken during my education at Coder Academy since February 2023. This list will continue to grow as I progress further in this incredible journey.
        </p>

        <Swiper
            spaceBetween={30} 
            pagination={{
                clickable: true,
            }}
            breakpoints={{
                540: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },
            }}
            modules={[Pagination]}
            className="projects__container container mySwiper"
        >
            {projects.map(({ name, title, link, tech_stack, description }, index) => {
                return (
                    <SwiperSlide className="projects__item card card-one">
                        <span className="projects__subtitle text-cs">{name}</span>
                        <span className='projects__techstack'>{tech_stack}</span>
                        <h3 className="projects__title">{title}</h3>
                        <p className="projects__description">{description}</p>

                        <a href={link} className="link">
                            Source Code
                            <FaArrowRight className='link__icon'></FaArrowRight>
                        </a>

                        <img src={shapeTwo} alt="" className="shape c__shape" />
                    </SwiperSlide>
                )
            })}
        </Swiper>

        <div className="section__bg-wrapper">
            <span className="bg__title">Projects</span>
        </div>
    </section>
  )
}

export default Projects;