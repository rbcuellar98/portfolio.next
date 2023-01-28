import React from "react";
import {Container,Row,Col} from "reactstrap";
import styles from './footer.module.css';
import Link from 'next/link';


const Foot_LINK = [
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
    }
]

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return <footer>
        <Container>
            <Row>
                {/* {Footer Top Layer} */}
                <Col lg='6'>
                    <div className={`${styles.nav__menu}`}>
                        {Foot_LINK.map((item,index) => (
                            <Link href={item.path} key={index}>
                                {item.display}
                            </Link>
                        ))}
                    </div>
                </Col>
                <Col lg='6'>
                    <div className={`${styles.footer__creator}`}>
                        <h6>Created by Rolando</h6>
                    </div>
                </Col>
                {/* {Footer Bottom Layer} */}
                <Col lg='12'>
                    <div className={`${styles.footer__copyright}`}>
                        <p>&#169; Copyright {year} - Developped by Rolando. All right reserved.   </p>
                    </div>
                </Col>
            </Row>
        </Container>
    </footer>
}

export default Footer;