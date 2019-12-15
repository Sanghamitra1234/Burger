import React from 'react';
import styles from './Logo.css';

import BurgerLogo from '../../../assets/images/burger-logo.png';

const Logo=()=>{
    return(
        <div>
            <img src={BurgerLogo} alt="Burger Image"/>
        </div>
    );
}

export default Logo;