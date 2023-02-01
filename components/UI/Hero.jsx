import React from 'react'
import Section from './Section'
import {Container, Row, Col} from 'reactstrap'
import Image from "next/image";
import Link from "next/link";
import HeroImg from '../../public/images/hero1.png';
import styles from '../../styles/hero.module.css';

const Hero = () => {
    return(
    <section className={`${styles.hero}`}>
        <Container>
            <Row>
                {/* hero content */}
                <Col lg='6' md='6'>
                    <div className={`${styles.hero__content}`}>
                        <Section title="Hello"></Section>
                        <h2 className='mt-3 mb-3'>
                            I&apos;m Rolando Banasco Cuellar
                        </h2>
                        <h5 className='mb-4'>Developper</h5>
                        <p>Started working has Full Stack Developer for a startup company in Montreal, developed a passion for computer, troubleshooting and creating solutions to help individuals. </p>
                        <div className="mt-5">
                            <button className='primary__btn'><Link href='#'>Contact Me</Link></button>
                            <button className='secondary__btn'><Link href='#'>Download CV</Link></button>
                        </div>
                    </div>

                </Col>
                {/* hero image */}
                {/* ========== hero img ============= */}
          <Col lg="6" md="6">
            <div className={`${styles.hero__img} text-end`}>
              <Image alt="hero-image" src={HeroImg} width="100%" height="100%" />

              <div className={`${styles.hero__skills}`}>
                <h6>Skills</h6>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
              </div>

              <div className={`${styles.hero__experience} d-flex align-items-center gap-3`}>
                <span>
                  <i className="ri-lightbulb-flash-line"></i>
                </span>
                <div className="bg-transparent">
                  <h6>Experience</h6>
                  <h5 className="mb-0">2 Years</h5>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;