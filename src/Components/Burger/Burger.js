import React from 'react';
import styles from './Burger.module.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients'


const Burger=(props)=>{
    let totalKey=0;
    let transformedIngredients=Object.keys(props.ingredient).map(
        gKey=>{
            totalKey=totalKey+props.ingredient[gKey];
            //console.log(props.ingredient[gKey],gKey);
            return [...Array(props.ingredient[gKey])].map((_,index)=>{
                return <BurgerIngredients key={index} type={gKey}></BurgerIngredients>
            })
        })

        if(totalKey===0){
            transformedIngredients="Please Make Me Yummy"
        }
    //console.log("tran",totalKey);
    
    return(
        <div className={styles.Burger}>
            <BurgerIngredients type="breadTop"/>
                {transformedIngredients}
            <BurgerIngredients type="breadBottom"/>
        </div>
    )
}
export default Burger;