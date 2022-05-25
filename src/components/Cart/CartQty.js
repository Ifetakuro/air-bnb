import '../../styles/Cart.css'
import {connect} from 'react-redux'
import {useState, useEffect} from 'react'

function CartQty({ products }) {
  const [cartQuantity, setCartQuantity] = useState(0)

  useEffect(() => {
    let count = 0;
    count += products.length
    setCartQuantity(count)
    
  }, [products, cartQuantity]);

  return (
    <>
      <p className='cart-btn-p'>{cartQuantity}</p>
    </>
  )
}

const mapStateToProps = state => {
  return{
    products: state.shop.products
  }
}

export default connect(mapStateToProps)(CartQty)

