import React from 'react';
import "./Cart.css"

const Cart = ({cart}) => {
  console.log(cart)

   let total = 0 ;
   let shipping = 0 ;
   for(let product of cart) {
     total = total + product.price ;
     shipping = shipping + product.shipping ;
   }

   const tax = Number((total * .10).toFixed(2));

   const grandTotal = total + shipping + tax
  return (
    <div className='cart'>
       <p className='cart_title'>Ordered Summary</p>
       <p>Seleted Items : $ {cart.length}</p>
       <p>Total Price : ${total}</p>
       <p>Total Shipping : $ {shipping}</p>
       <p>Tax : $ {tax}</p>
       <h4>Grand Total : $ {grandTotal}</h4>
    </div>
  )
}

export default Cart