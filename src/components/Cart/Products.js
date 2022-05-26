import CartItem from './CartItem'
import {useSelector} from 'react-redux'
import '../../styles/Cart.css'

const Products = ({onValue1}) => {
 const product = useSelector((state) => state.shop.products)
  return (
    <div>
      {product.map((prod) => {
        return <CartItem key={prod.id} productData={prod} onValue={onValue1}/>
      })}
    </div>
  )
}



// const mapStateToProps = state => {
//   return{
//     products: state.shop.products
//   }
// }

// export default connect(mapStateToProps)(Products)

export default Products