import '../../styles/Cart.css'
import {useState, useEffect} from 'react'
import {FiArrowLeft} from 'react-icons/fi'
import CartBtn from './CartBtn'
import Products from './Products'
import {connect} from 'react-redux'
import {changeQuantity} from '../../shopping/shopping-action'

function Cart({products, cartClass, cartClick, changeQty}) {

  const [input, setInput] = useState(0);

  const onChangeHandler = (e) => {
    setInput(e.target.value);
    changeQty(e.target.value);
  }
  
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    let price = 0;

    products.forEach((item) => {
      return price += parseInt(input) * parseInt(item.price);
    })

    setTotalPrice(price)
  }, [input, setInput, products,totalPrice,setTotalPrice])
  

  return (
    <>
      <div className={cartClass}>
        <div className='cart-head'>
          <span onClick={cartClick}><FiArrowLeft/></span>
          <h3>My Cart</h3>
          <CartBtn class={'cart-icon icon-active'}/>
        </div>
        <Products onValue1={onChangeHandler}/>
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


const mapStateToProps = state => {
  return{
    products: state.shop.products
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeQty: (qty) => dispatch(changeQuantity(qty)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps, null)(Cart);



