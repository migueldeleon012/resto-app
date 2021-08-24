import {v4 as uuidv4} from 'uuid'

const inititalState = {
  products:[        
    {
      id: uuidv4(),
      name: "Burger",
      price: 50,
      category: "Food",
      qty: 1,
      description: "",
      image: "https://image.flaticon.com/icons/svg/1046/1046784.svg"
    },
    {
      id: uuidv4(),
      name: "Pizza",
      price: 100,
      category: "Food",
      qty: 1,
      description: "",
      image: "https://image.flaticon.com/icons/svg/1046/1046771.svg"
    },
    {
      id: uuidv4(),
      name: "Fries",
      price: 25,
      category: "Food",
      qty: 1,
      description: "",
      image: "https://image.flaticon.com/icons/svg/1046/1046786.svg"
    },
    {
      id: uuidv4(),
      name: "Coffee",
      price: 35,
      category: "Drinks",
      qty: 1,
      description: "",
      image: "https://image.flaticon.com/icons/svg/1046/1046785.svg"
    },
    {
      id: uuidv4(),
      name: "Iced Tea",
      price: 45,
      category: "Drinks",
      qty: 1,
      description: "",
      image: "https://image.flaticon.com/icons/svg/1046/1046782.svg"
    },
    {
      id: uuidv4(),
      name: "Hot Tea",
      price: 45,
      category: "Drinks",
      qty: 1,
      description: "",
      image: "https://image.flaticon.com/icons/svg/1046/1046792.svg"
    }
  ],
  categories: ['All', 'Food', 'Drinks', 'Desserts'],
  selectedCategory: 'All',
  total: 0,
  cart: [],
  displayModal: false,
  displayNavbar: false
}

const reducer = (state = inititalState, action) => {
  switch (action.type) {
    //product related
    case 'ADD_PRODUCT':
      return { ...state, products: [...state.products, action.payload] }

    case 'DELETE_PRODUCT':
      let filteredProducts = state.products.filter(product => product.id !== action.payload)
      return { ...state, products: filteredProducts }

    case 'CHANGE_SELECTED_CATEGORY':
      return { ...state, selectedCategory: action.payload }

    case 'EDIT_PRODUCT':
      let filteredEditProducts = state.products.filter(product => product.id !== action.payload.id)
      return { ...state, products: [...filteredEditProducts, action.payload]}

    case 'DISPLAY_MODAL':
      return {...state, displayModal: !state.displayModal}

    case 'DISPLAY_NAVBAR':
      return {...state, displayNavbar: !state.displayNavbar}
    //CART RELATED
    case 'ADD_TO_CART':
      let duplicate = state.cart.find( item => item.id === action.payload.id);
      let copy = state.cart.slice(0)
      if ( duplicate ){
        duplicate.qty ++
      }
      else {
        let found = state.products.find ( product => product.id === action.payload.id);
        let toSortCopy =([...copy, found])    
        let sortedCopy = ((toSortCopy.sort((a, b) => (a.name > b.name) ? 1 : -1)))
        return { ...state, cart: sortedCopy}
      }
      break

    case 'ADD_QUANTITY':
      let found = state.cart.find( item => item.name === action.payload.name)
      found.qty ++
    
      let copyCart = state.cart.slice(0)
      let filteredCopy = copyCart.filter( item => item.name !== found.name)
      let toSortCopy =([...filteredCopy, found])
      let sortedCopy = (toSortCopy.sort((a, b) => (a.name > b.name) ? 1 : -1))

      return { ...state, cart: sortedCopy}

    case 'MINUS_QUANTITY': 
      action.payload.qty --
      let filteredArray = state.cart.filter( item => item.id !== action.payload.id)


      if(action.payload.qty === 0){
        let sortedCopy = (filteredArray.sort((a, b) => (a.name > b.name) ? 1 : -1))
        return { ...state, cart: sortedCopy}
      } else{
        let toSortCopy =([...filteredArray, action.payload])
        let sortedCopy = (toSortCopy.sort((a, b) => (a.name > b.name) ? 1 : -1))
        return { ...state, cart: sortedCopy}
      }

    case 'DELETE_CART_ITEM':
      let filteredCartProducts = state.cart.filter(product => product.id !== action.payload)
      return { ...state, cart: filteredCartProducts }

    default:
      return state
  }
}

export default reducer