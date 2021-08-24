import { useSelector, useDispatch } from "react-redux"
import DisplayTotal from "./DisplayTotal"

const Cart = () => {
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()
  
  if (cart.length === 0 ){
    return (
      <div className="container__cart">
        <h3>No items in the cart</h3>
      </div>
  )
  }
  return (
    <div className="container__cart">
      <h2>My Cart</h2>
      <div className="container__cart__placeholder">        
        {
        cart.map( item => 
          <div className="container__cart__item">
            <div className="img">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="specs">
            <div className="desc">
              <p>{item.name}</p>
              <div className="btns">
                <button onClick = { ()=> dispatch({type:'ADD_QUANTITY', payload: item }) }>+</button>
                <button onClick = { ()=> dispatch({type:'MINUS_QUANTITY', payload: item }) }>-</button>
                <span>{item.qty}</span>
              </div>
              <button className="delete" onClick={ ()=> dispatch({type:'DELETE_CART_ITEM', payload: item.id }) }>Delete</button>
            </div>
            <div className="subtotal">
              <h4>Subtotal</h4>
              <p>Php {item.price*item.qty}.00</p>
            </div>
            </div>
          </div>
        )}
      </div>
        <DisplayTotal/>

    </div>
  )
}

export default Cart
