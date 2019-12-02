import React, { Component } from 'react';
import Auxilary from '../../HOC/Auxilary';
import Burger from '../../Components/Burger/Burger';
import BuildControl from '../../Components/Burger/BuildControl/BuildControl';
import Modal from '../../Components/UI/Modal/Modal';
import OrderControl from '../../Components/Burger/OrderControl/OrderControl';

const INGREDIENTS_PRICE={
    "salad":10,
    "meat":25,
    "bacon":30,
    "cheese":20
}

class BurgerBuilder extends Component{
    state={
        ingredients:{
            "salad":0,
            "meat":0,
            "bacon":0,
            "cheese":0
        },
        totalPrice:40,
        purchase:false,
        purchaseModal:false
    }
    updateTheIngredients=(ingredients,sum)=>{
       // console.log("f",sum);
        
        for(let k in ingredients){
            sum+=ingredients[k];
        }
        if(sum>=0){
            this.setState({purchase:true});
        }else{
            this.setState({purchase:false});
        }
    }

    ingridentsDecreseHandler=(type)=>{
        const prevQuantity=this.state.ingredients[type];
        if(prevQuantity==0){
           return;
        }
        const updatedIngredients={
            ...this.state.ingredients
        }
        updatedIngredients[type]=prevQuantity-1;
        //console.log("updatedQty",updatedIngredients[type]);
        
        const prevPrice=this.state.totalPrice;
        const updatedPrice=prevPrice-INGREDIENTS_PRICE[type];

        this.setState({ingredients:updatedIngredients , totalPrice:updatedPrice});
        this.updateTheIngredients(updatedIngredients,0);

    }
    ingredientsIncreaseHandler=(type)=>{
        //console.log("type",type);
        
        const prevQuantity=this.state.ingredients[type];
        const updatedIngredients={
            ...this.state.ingredients
        }
        updatedIngredients[type]=prevQuantity+1;
        //console.log("updatedQty",updatedIngredients[type]);
        
        const prevPrice=this.state.totalPrice;
        const updatedPrice=prevPrice+INGREDIENTS_PRICE[type];

        this.setState({ingredients:updatedIngredients , totalPrice:updatedPrice});
        this.updateTheIngredients(updatedIngredients,0);
    }
    purchaseHandler=()=>{
        this.setState({purchaseModal:true});
        console.log("purchase",this.state.purchaseModal);
        
    }
    purchaseRemoveHandler=()=>{
        this.setState({purchaseModal:false});
        console.log("purchase",this.state.purchaseModal);
    }
    render(){
        let disable={...this.state.ingredients};
        //console.log("updated in state",disable);
        for(let k in disable){
            let t=disable[k]>=0;
            disable[k]=t;
        }
        console.log("uho",disable);
        return(
            <Auxilary>
                <Modal ing={this.state.ingredients} show={this.state.purchaseModal} clicked={this.purchaseRemoveHandler}>
                    <OrderControl ing={this.state.ingredients} show={this.state.purchaseModal}/>
                </Modal>
                <Burger ingredient={this.state.ingredients}/>
                <BuildControl 
                    addIngredients={this.ingredientsIncreaseHandler} 
                    removeIngredients={this.ingridentsDecreseHandler} 
                    disabled={disable}
                    price={this.state.totalPrice}
                    order={this.purchaseHandler}
                    ingredients={this.state.purchase}/>
            </Auxilary>
        )
    }
}
export default BurgerBuilder;