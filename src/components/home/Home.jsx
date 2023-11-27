import React from 'react';
import profileImg from "../../assets/profile-img.png";
import shapeOne from "../../assets/shape-1.png";
import shapeTwo from "../../assets/shape-2.png";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import CV from '../../assets/EllenPham_Resume.pdf';
import './home.css';

const Home = () => {
  return (
    <section className='home' id='home'>
        <div className='home__wrapper'>
            <div className='home__container container'>
                <p className="home__subtitle text-cs">
                    Hello, <span>My Name Is</span>
                </p>

                <h1 className='home__title text-cs'>
                    <span>ELLEN</span> PHAM
                </h1>

                <p className='home__job'>
                    <span className='text-cs'>I Am</span> <b>Junior Web Developer</b>
                </p>

                <div className="home__img-wrapper">
                    <div className="home__banner">
                        <img src={profileImg} alt="" className='home__profile'/>
                    </div>
                    
                    <p className="home__data home__data-one">
                        <span className="text-left text-cs">
                            Passionate
                        </span>

                        <span className="text-right text-cs">
                            Learner
                        </span>
                    </p>

                    <p className="home__data home__data-two">
                        <span className="text-left text-cs">
                            Resilient
                        </span>
                        
                        <span className="text-right text-cs">
                            Spirit
                        </span>
                    </p>

                    <img src={shapeOne} alt="" className="shape shape__1" />
                    <img src={shapeTwo} alt="" className="shape shape__2" />
                    <img src={shapeTwo} alt="" className="shape shape__3" />
                </div>

                <p className='home__text'>
                    Aspiring coder with a genuine passion for web development and a sincere desire for professional growth in the tech industry. 
                </p>
                
                <div className="home__socials">
                    <a href="https://www.linkedin.com/in/ellen-my-pham/" className="home__social-link">
                        <FaLinkedin />
                    </a>

                    <a href="https://github.com/ellenpham" className="home__social-link">
                        <FaGithub />
                    </a>
                </div>

                <div className="home__btns">
                    <a download='' href={CV} className="btn text-cs">
                        Download My CV
                    </a>
                    <a href='#projects' className="hero__link text-cs">
                        My Work
                    </a>
                </div>
            </div>
        </div>

        <div className="section__bg-wrapper">
            <span className="bg__title">Web Developer</span>
        </div>
    </section>
  )
}

export default Home