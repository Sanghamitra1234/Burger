import React from 'react';
import styles from './BuildControl.module.css';
import BuildControls from './BuildControls/BuildControls';

const controls=[
    {label:'salad',type:'salad'},
    {label:'bacon',type:'bacon'},
    {label:'cheese',type:'cheese'},
    {label:'meat',type:'meat'}
];

 const BuildControl=(props)=>{
    //console.log("pojp",props.ingredients,props.disabled);
    
    return(
        <div className={styles.BuildControl}>
            {/* <p>Current Price : <strong>{props.price}</strong></p> */}
            {   controls.map((c)=>{
                    return <BuildControls key={c.label} label={c.label} 
                    disabled={props.disabled} 
                    remove={()=>{props.removeIngredients(c.type)}} 
                    added={()=>{props.addIngredients(c.type)}}>
                    </BuildControls>
                })
            }
            <p>Current Price : <strong> Rs :- {props.price}</strong></p>
            <button className={styles.btn} 
            onClick={props.order}
            disabled={!props.ingredients} >Order Now</button>
        </div>
    )

}

export default BuildControl