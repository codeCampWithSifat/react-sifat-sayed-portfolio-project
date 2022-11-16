import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useProducts();
  const [cart , setCart] = useState([]);

  // useEffect(() => {
  //   fetch("./products.json")
  //   .then(res => res.json())
  //   .then(data =>setProducts(data))
  // },[]);

  useEffect(() => {
    const storedCart = getStoredCart();
    const savedCart = []
    for (const id in storedCart) {
      const addedProuducts = products.find(product => product.id === id);
      if (addedProuducts) {
        const quantity = storedCart[id];
        addedProuducts.quantity = quantity
        savedCart.push(addedProuducts)
      }
    }
    setCart(savedCart);
  },[products])

  const handleAddToCart = (selectedProduct) => {
      let newCart
      const exists = cart.find(product => product.id === selectedProduct.id);
      if (!exists) {
        selectedProduct.quantity = 1 ;
        newCart = [...cart , selectedProduct]
      } else {
        const rest = cart.filter(product => product.id !== selectedProduct.id);
        exists.quantity = exists.quantity + 1 ;
  
         newCart = [...rest , exists];
      }
      setCart(newCart);
      addToDb(selectedProduct.id)
  }
    
  return (
    <div className="shop_container">
        <div className="products_container">
            {
              products.map(product => <Product 
                product={product}
                key ={product.id}
                handleAddToCart={handleAddToCart}
              ></Product>)
            }
        </div>
        <div className="cart_container">
          <Cart cart={cart}>
            <Link to="/orders"><button>Review Order</button></Link>
          </Cart>
        </div>
    </div>
  )
}

export default Shop