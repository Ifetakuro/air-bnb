import * as actionTypes from './shoping-type'

export const changeQuantity = (value) => {
  return {
    type: actionTypes.CHANGE_QUANTITY,
    payload: {
      qty: value
    }

  }
}