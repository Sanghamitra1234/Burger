import React from 'react';

import styles from './Backdrop.module.css'

const Backdrop=(props)=>{
    //console.log("backdrop",props.clicked,props.show);
    return(
        props.show?<div className={styles.backdrop} onClick={props.clicked}></div>:null
    );
}

export default Backdrop;