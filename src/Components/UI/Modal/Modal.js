import React from 'react';
import styles from './Modal.module.css';
import Auxilary from '../../../HOC/Auxilary';
import Backdrop from '../Backdrop/Backdrop';

const modal=(props)=>{    
    //console.log("modal",props.show,props.clicked);
return(
     <Auxilary>
          <Backdrop show={props.show} clicked={props.clicked}/>
            <div className={styles.Modal} style={{
                    transform:props.show ?'translateY(0)':'translateY(-100vh)',
                    opacity:props.show ?'1':'0'
            }}>
                    {props.children}
            </div>

     </Auxilary>
    
 );
}

export default modal;