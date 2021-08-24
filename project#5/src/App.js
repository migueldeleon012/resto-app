import './scss/main.scss';
import { useSelector, useDispatch } from 'react-redux';

import DisplayAddForm from './components/DisplayAddForm';
import DisplayProduct from './components/DisplayProducts'
import Cart from './components/Cart'

// import {v4 as uuidv4} from 'uuid'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const App = () => {
  const displayNavbar = useSelector(state => state.displayNavbar)
  const displayModal = useSelector(state => state.displayModal)
  const dispatch = useDispatch()
  const body = document.querySelector('body')
  if( displayModal ){
    body.classList.add('overflow')
  } else{
    body.classList.remove('overflow')
  }

  return (
    <div className='App'>
      <Router>
        <nav className="nav">
          <h1>Pizza at iba pa</h1>
          <div className={displayNavbar ? 'nav__links active' : 'nav__links'}>
            <div className="links">
              <Link className="link" to='/' onClick={()=> dispatch({type: 'DISPLAY_NAVBAR'})}>Products</Link>
              <Link className="link" to='/form' onClick={()=> dispatch({type: 'DISPLAY_NAVBAR'})}>Add Product</Link>
              <Link className="link" to='/cart' onClick={()=> dispatch({type: 'DISPLAY_NAVBAR'})}>Cart</Link>
            </div>
          </div>
          <div className="nav__burger" onClick={()=> dispatch({type: 'DISPLAY_NAVBAR'})}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </nav>
        <Route exact path='/' component={DisplayProduct}/>
        <Route path='/form' component={DisplayAddForm}/>
        <Route path='/cart' component={Cart}/>
      </Router>
    </div>
  );
}

export default App;
