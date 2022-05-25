import {FaShoppingBasket} from 'react-icons/fa'
import '../../styles/Cart.css'
import CartQty from './CartQty'

function CartBtn(props) {
  return (
    <>
      <div className={props.class} onClick={props.click}>
        <CartQty />
        <span><FaShoppingBasket /></span>
      </div>
    </>
  )
}


export default CartBtn