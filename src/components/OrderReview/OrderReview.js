import React from 'react';
import { useNavigate } from 'react-router-dom';
import UseCart from '../../Hooks/UseCart';
import UseProducts from '../../Hooks/UseProducts';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
const [products]=UseProducts();

const [cart ,setCart]=UseCart(products);


const handleRemove=key=>{
// console.log(key)

const newCart=cart.filter(product=>product.key!==key);
setCart(newCart);
removeFromDb(key)

}
const navigate=useNavigate();

const handlePlaceOrder=()=>{
     navigate('/placeorder');
 setCart([]);
 clearTheCart();

}




    return (
        <div className='shop-container'>

<div className='product-container'>
{

cart.map(product=><ReviewItem
product={product}
key={product.key}
handleRemove={handleRemove}
/>)

}
</div>

<div className='cart-container'>
<Cart cart={cart}>
<button className='btn-regular' onClick={handlePlaceOrder} >Place Order</button>

</Cart>

</div>


            {/* <h1>{products.length}</h1>
            // <h3>{cart.length}</h3>
            // <h2>This is Order Review</h2> */}

            
        </div>
    );
};

export default OrderReview;