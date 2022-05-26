import '../../styles/Cart.css'
import {useState, useEffect} from 'react'
import {FiArrowLeft} from 'react-icons/fi'
import CartBtn from './CartBtn'
import Products from './Products'
import {useSelector} from 'react-redux'

// import {getSemiTotal} from '../../shopping/shopping-action'


function Cart({cartClass, cartClick}) {

  const product = useSelector((state) => state.shop.products)
  // const semiTotal = useSelector((state) => state.shop.semiTotal)
  // const dispatch = useDispatch()

  const [input, setInput] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0)
  // const [qty, setQty] = useState(0);


  // const onChangeHandler = (quantity, e) => {
  //   dispatch(getSemiTotal(e.target.value, quantity))
    
  //   setInput(e.target.value);
  //   console.log('semitotal:',semiTotal)

  // }
  
  useEffect(() => {
    let price = 0;
    
    product.forEach((item) => {
      
      return price += item.qty[0] * item.price;
    })
    
    setTotalPrice(price)
  }, [input, setInput, product,totalPrice,setTotalPrice])
 
  

  return (
    <>
      <div className={cartClass}>
        <div className='cart-head'>
          <span onClick={cartClick}><FiArrowLeft/></span>
          <h3>My Cart</h3>
          <CartBtn class={'cart-icon icon-active'}/>
        </div>
        <Products />
        <div className='total'>
          <div>
            <p className='total-p'>TOTAL</p>
            <h3>${totalPrice}</h3>
          </div>
          <button className='total-btn'>
            DONE SHOPPING
          </button>
        </div>
      </div>
    </>
  )
}


// const mapStateToProps = state => {
//   return{
//     products: state.shop.products
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     changeQty: (qty) => dispatch(changeQuantity(qty)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Cart);
export default Cart



