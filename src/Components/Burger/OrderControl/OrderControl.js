import React from 'react';
import Auxilary from '../../../HOC/Auxilary';

const OrderControl=(props)=>{
    //console.log("props show",props.show);
    
    let ingredientsList=Object.keys(props.ing).map((ing)=>{
        return <li key={ing}>{ing} : {props.ing[ing]}</li>
        })
    return(
        <Auxilary>
         
                <h1>The ingredients you have ordered : </h1>
                <div>
                    <ul>
                        {ingredientsList}
                    </ul>
                </div>
                <button >Check out</button>
       
        </Auxilary>
    );

}

export default OrderControl;

