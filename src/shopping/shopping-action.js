import * as actionTypes from './shoping-type'

// export const changeQuantity = (value) => {
//   return {
//     type: actionTypes.CHANGE_QUANTITY,
//     payload: {
//       qty: value
//     }

//   }
// }

export const getSemiTotal = (price, qty) =>{
  // console.log(price, qty)
  const result = price * qty;
  console.log('reducer',result )
  return { type: actionTypes.GET_SEMI_TOTAL, semiTotal: result }
// dispatch({ type: actionTypes.GET_SEMI_TOTAL, semiTotal: result })

}

