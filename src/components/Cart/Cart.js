import React from 'react';
import "./Cart.css"

const Cart = (props) => {
  const {cart} = props;

   let total = 0 ;
   let shipping = 0 ;
   let quantity = 0
     for(let product of cart) {
      quantity = quantity + product.quantity
     total = total + product.price* product.quantity ;
     shipping = shipping + product.shipping * product.quantity  ;
   }

   const tax = Number((total * .10).toFixed(2));

   const grandTotal = total + shipping + tax
  return (
    <div className='cart'>
       <p className='cart_title'>Ordered Summary</p>
       <p>Seleted Items : $ {quantity}</p>
       <p>Total Price : ${total}</p>
       <p>Total Shipping : $ {shipping}</p>
       <p>Tax : $ {tax}</p>
       <h4>Grand Total : $ {grandTotal}</h4>
        {props.children}
    </div>
  )
}

export default Cart