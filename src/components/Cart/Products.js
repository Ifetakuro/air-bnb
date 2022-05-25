import CartItem from './CartItem'
import {connect} from 'react-redux'
import '../../styles/Cart.css'

const Products = ({products, onValue1}) => {
 
  return (
    <div>
      {products.map((prod) => {
        return <CartItem key={prod.id} productData={prod} onValue={onValue1}/>
      })}
    </div>
  )
}



const mapStateToProps = state => {
  return{
    products: state.shop.products
  }
}

export default connect(mapStateToProps)(Products)
