import React from "react";
import { Container, Row, Col } from "reactstrap";
import Section from "./Section";
import styles from "../../styles/experience.module.css";
import ExperienceItem from "./ExperienceItems";

const Services = () => {
  return (
    <section id="services">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className={`${styles.experience__container}`}>
              <div>
                <ExperienceItem
                  title="Front-End Development"
                  icon="ri-bring-to-front"
                />
                <ExperienceItem
                  title="Back-End Development"
                  icon="ri-send-to-back"
                />
              </div>
              <ExperienceItem
                title="Full-Stack Development"
                icon="ri-stack-line"
              />
            </div>
          </Col>

          <Col lg="6" md="6">
            <Section title="What i do " />
            <h3 className="mb-0 mt-4">Better Design,</h3>
            <h3 className="mb-4">Better Experience</h3>
            <p>Full Stack Developer with experience in developing web applications using a diverse range of technologies and frameworks. Proficient in Javascript, Typescript, C#, and Python, with hands-on experience in building applications using React and Next. Experienced in back-end development with Node, Java, and C#, with a focus on creating scalable and efficient solutions. Committed to delivering high-quality products with a focus on user experience and technology innovation.</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
