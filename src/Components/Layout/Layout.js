import React from 'react';
import Auxilary from '../../HOC/Auxilary'
import styles from './Layout.module.css';

const Layout=(props)=>{
    return(
        <Auxilary>
            <div>Toolbar, drawer, backdrop</div>
            <main className={styles.Content}>{props.children}</main>
        </Auxilary>
    )
    
}

export default Layout;