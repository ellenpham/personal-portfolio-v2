import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container grid">
            <div className="footer__socials">
                <a href="https://www.linkedin.com/in/ellen-my-pham/" className="footer__social-link">
                    <FaLinkedin />
                </a>

                <a href="https://github.com/ellenpham" className="footer__social-link">
                    <FaGithub />
                </a>
            </div>

            <p className="footer__copyright text-cs">
                &copy; 2023 LUIQUE. All Rights reserved
            </p>

            <p className="footer__copyright text-cs">
                Developed by <span>Ellen Pham</span>
            </p>
        </div>
    </footer>
  )
}

export default Footer