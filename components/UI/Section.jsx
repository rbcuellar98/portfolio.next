import React from 'react';
import styles from '../../styles/section.module.css';
const Section = (props) =>{
    return(
    <h5 className={`${styles.section__title}`}>
        {props.title}
    </h5>)
}

export default Section;