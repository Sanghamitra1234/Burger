import React from 'react';
import Auxilary from '../../HOC/Auxilary'
import styles from './Layout.module.css';
import Toolbar from '../Burger/Navigation/Toolbar/Toolbar'

const Layout=(props)=>{
    return(
        <Auxilary>
            <Toolbar/>
            <main className={styles.Content}>{props.children}</main>
        </Auxilary>
    )
    
}

export default Layout;