import React from 'react';
import styles from './BurgerIngredients.module.css';
import propTypes from 'prop-types';

const BurgerIngredients=(props)=>{
    let ingredients=null;

    switch (props.type) {
        case ('breadBottom'):
            ingredients=<div className={styles.BreadBottom}></div>;
            break;
        case ('breadTop'):
            ingredients=(<div className={styles.BreadTop}>
                            <div className={styles.Seeds1}></div>
                            <div className={styles.Seeds2}></div>
                        </div>);
            break;
        case ('meat'):
            ingredients=<div className={styles.Meat}></div>;
            break;
        case ('cheese'):
            ingredients=<div className={styles.Cheese}></div>;
            break;
        case ('salad'):
            ingredients=<div className={styles.Salad}></div>;
            break;
        case ('bacon'):
            ingredients=<div className={styles.Bacon}></div>;
            break;
    
        default:
            ingredients=null;
            break;
    }
    return ingredients;
}
BurgerIngredients.propTypes={
    type:propTypes.string.isRequired
}

export default BurgerIngredients;