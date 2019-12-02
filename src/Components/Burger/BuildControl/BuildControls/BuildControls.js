import React from 'react';
import styles from './BuildControls.module.css'

const BuildControls=(props)=>{
    //console.log("olm",props.disabled);
    return(

        
        <div className={styles.BuildControls}>
            <div className={styles.label}>{props.label} : </div>
            <div className={styles.controls}>
                <button className={styles.minus}
                 onClick={props.remove}>LESS</button>
                <button className={styles.plus} onClick={props.added}>MORE</button>
            </div>
        </div>
    );
}

export default BuildControls;