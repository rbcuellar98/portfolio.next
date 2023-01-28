import React from "react";

import {Container} from 'reactstrap';
import styles from './header.module.css';
import Link from 'next/link';

const NAV__LINK = [
    {
        path: '/',
        display: 'Home'
    },
    {
        path: '#about',
        display: 'About'
    },
    {
        path: '#services',
        display: 'Services'
    },
    {
        path: '#portfolio',
        display: 'Portfolio'
    },
    {
        path: '#contact',
        display: 'Contact'
    },
]

const Header = () => {
    return <header className={`${styles.header}`}>
        <Container>
            <div className={`${styles.nav__wrapper}`}>
                {/*============nav=============*/}
                <div className={`${styles.logo}`}>
                    <h1><span>R</span>olando</h1>
                </div>
                {/*  nav menu*/}
                <div className={`${styles.navigation}`}>

                    <div className={`${styles.nav__menu}`}>
                        {
                        NAV__LINK.map((item, index) =>(
                            <Link href={item.path} key={index}>{item.display}</Link>
                        ))
                        }
                        <div className={`styles.nav__right`}>
                            <p className=" d-flex align-items-center gap-3 mb-0">
                                {" "}
                                <i className="ri-smartphone-line"></i></p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </Container>
    </header>
};

export default Header;