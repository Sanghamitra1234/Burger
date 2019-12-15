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
    `               <p><strong>Total Price : {props.price}</strong></p>
                </div>
                <button onClick={props.click}>Check out</button>
       
        </Auxilary>
    );

}

export default OrderControl;

