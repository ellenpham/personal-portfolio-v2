import React from 'react';
import { links } from '../../Data';

const Header = () => {
  return (
    <header className="header">
        <nav className="nav">
            <a href="" className="nav__logo text-cs">
                EP
            </a>

            <div className="nav__menu">
                <ul className="nav__list">
                    {links.map(({name, path}, index) => {
                        return (
                            <li className="nav__item" key={index}>
                                <a href="" className="nav__link text-cs">
                                    {name}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Header;