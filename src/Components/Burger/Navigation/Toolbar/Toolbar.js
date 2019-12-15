import React from 'react';
import styles from './Toolbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import SideDrawer from '../SideDrawer/SideDrawer';

const Toolbar=(props)=>{
    return(
    <header className={styles.Toolbar}>
        <SideDrawer/>
        <div>Menu</div>
        <nav>
            <NavigationItems/>
        </nav>
    </header>
    );
}

export default Toolbar