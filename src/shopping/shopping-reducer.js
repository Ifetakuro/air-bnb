import * as actionTypes from "./shoping-type";
import coconut from '../images/coconut.png'


const INITIAL_STATE = {
  products: [
    {
      id: 1,
      name: 'Okazi Leaves ',
      image: coconut,
      price: 30,
      letter: ['M'],
      class: ['letter-p color1'],
      qty: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    },
    {
      id: 2,
      name: 'Okazi Leaves',
      image: coconut,
      price: 120,
      letter: 'R',
      class: ['letter-p color2'],
      qty: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    },
    {
      id: 3,
      name: 'Rice Bean Lea...',
      image: coconut,
      price: 50,
      letter: ['M', 'P'],
      class: ['letter-p color3', 'letter-p brown'],
      qty: [1, 2, 3, 4, 5, 6,7, 8, 9, 10]
    },
    {
      id: 4,
      name: 'Efo Stew Ingre...',
      image: coconut,
      price: 45,
      letter: ['M'],
      class: ['letter-p color4'],
      qty: [1, 2, 3, 4, 5, 6 ,7, 8, 9, 10]
    },
  ],
  semiTotal: 0
}


const shopReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case actionTypes.GET_SEMI_TOTAL:
      return {
        ...state,
        semiTotal: action.semiTotal
      }
    // case actionTypes.CHANGE_QUANTITY:
    // return {
    //   ...state,
    //   products: state.products.map((item) =>
    //     item.qty === action.payload.qty
    //       ? { ...item, qty: +action.payload.qty}
    //       : item
    //   ),
    // }
    default:
      return state;
  }
}

export default shopReducer
