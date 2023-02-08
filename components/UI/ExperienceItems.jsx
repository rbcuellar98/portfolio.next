import React from "react";
import styles from "../../styles/experience-item.module.css";

const ExperienceItem = ({ title, icon }) => {
  return (
    <div className={`${styles.experience__item}`}>
      <span>
        <i className={icon}></i>
      </span>
      <h5>{title}</h5>
    </div>
  );
};

export default ExperienceItem;
