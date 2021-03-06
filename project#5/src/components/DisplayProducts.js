import {useSelector, useDispatch} from 'react-redux'
import { useState } from "react"
import EditProductForm from './EditProductForm'

const DisplayProducts = () => {
  const products = useSelector(state => state.products)
  const categories = useSelector(state => state.categories)
  const selectedCategory = useSelector(state => state.selectedCategory)
  const displayModal = useSelector(state => state.displayModal)

  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('')
  const [image, setImage] = useState('')
  
  const dispatch = useDispatch()

  const onCategoryChangeClickHandler = (e) =>{
    dispatch({ type: 'CHANGE_SELECTED_CATEGORY', payload: e.target.value})
  }

  const onEditButtonClickHanlder = (e) =>{
    dispatch({type: 'DISPLAY_MODAL'})
    setId(e.currentTarget.dataset.id)
    setName(e.currentTarget.dataset.name)
    setPrice(e.currentTarget.dataset.price)
    setCategory(e.currentTarget.dataset.category)
    setImage(e.currentTarget.dataset.image)
  }
  //admin

  return (
    <main>
      <select defaultValue='' onChange={e => onCategoryChangeClickHandler(e)}>
        <option value="" disabled>Select Category</option>
        {categories.map( category => <option value={category} key={category}>{category}</option>)}
      </select>
      <div className="container">
        {    
          products
          .filter(product => selectedCategory === 'All' 
            ? product 
            : product.category === selectedCategory)
          .map( (product) => 
            <div className="container__card" key={product.id}> 
              <div className="img">
                <img src={product.image} alt = {product.name} />
              </div>
              <div className="container__card__desc">
                <div className="name">
                  <h4>{product.name}</h4>
                  <p>Php {product.price}</p>
                </div>
                <div className="btns">
                  <button onClick={ ()=> dispatch({type:'ADD_TO_CART', payload: product }) }>Order</button>
                  {/* user.isAdmin &&*/}
                  <button 
                    onClick={ onEditButtonClickHanlder } 
                    data-id = {product.id}
                    data-name = {product.name}
                    data-price = {product.price}
                    data-category = {product.category}
                    data-image = {product.image}>
                    Edit
                  </button>
                  <button className="delete" onClick = { ()=> dispatch({type:'DELETE_PRODUCT', payload: product.id }) }>Delete</button> 
                </div>
              </div>
          </div>
          )}
      </div>
      {displayModal 
        ? <EditProductForm 
           id={id}
           name={name}
           price={price}
           category={category}
           image={image}
           displayModal={displayModal}
          /> 
        : null}
    </main>
  )
}

export default DisplayProducts;
