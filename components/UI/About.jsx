import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import Section from "./Section";
import Image from "next/image";

import next_card from "../../public/images/next-card.jpg";
import react_card from "../../public/images/react-card.jpg";
import node_card from "../../public/images/node-card.jpg";
import python_card from "../../public/images/python-card.jpg";

import styles from "../../styles/about.module.css";

const About = () => {
  return (
    <section id="about">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <Section title="About me"></Section>
            <h3 className="mt-4">Creativ&apos; E</h3>
            <h3 className="mb-4">Perpuse&apos; E</h3>
            <p>
              Strong focus on full-stack development, I bring a fresh
              perspective and cutting-edge technical skills to the table.{" "}
            </p>
            <div className="d-flex align-items-center gap-5">
              <div>
                <h6 className="d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${styles.about__icon}`}>
                    <i className="ri-checkbox-multiple-fill"></i>
                  </span>
                  Creative Eye
                </h6>
                <h6 className="d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${styles.about__icon}`}>
                    <i className="ri-checkbox-multiple-fill"></i>
                  </span>
                  Problem Solving
                </h6>
              </div>

              <div>
                <h6 className="d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${styles.about__icon}`}>
                    <i className="ri-checkbox-multiple-fill"></i>
                  </span>
                  Innovative
                </h6>
                <h6 className="d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${styles.about__icon}`}>
                    <i className="ri-checkbox-multiple-fill"></i>
                  </span>
                  Design
                </h6>
              </div>
            </div>

            <div className="mt-5">
              <button className="primary__btn">
                <Link href="#portfolio">Portfolio</Link>
              </button>

              <button className="secondary__btn">
                <Link href="#">Download CV</Link>
              </button>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="d-flex gap-4 justify-content-end">
              <div className="d-flex flex-column mb-3">
                <div
                  className={`${styles.about_img} ${styles.about__img__box}`}
                >
                  <Image src={next_card} alt="nextjs info" />
                </div>

                <div
                  className={`${styles.about_img} ${styles.about__img__box}`}
                >
                  <Image src={react_card} alt="nextjs info" />
                </div>
              </div>

              <div className="d-flex flex-column mb-3">
                <div
                  className={`${styles.about_img} ${styles.about__img__box}`}
                >
                  <Image src={node_card} alt="nextjs info" />
                </div>

                <div
                  className={`${styles.about_img} ${styles.about__img__box}`}
                >
                  <Image src={python_card} alt="nextjs info" />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
