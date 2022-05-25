
import '../../styles/Cart.css'



function CartItem({productData, onValue}) {
  
  return (
    <>
      <div className='cart-item'>
        <div>
          <img src={productData.image} alt={productData.name} />
        </div>
        <div className='item-price'>
          <p className="item-p">{productData.name}</p>
          <span className='item-span'>${productData.price}</span>
        </div>
        <select name="kg" id="kg" onChange={onValue}>
          {productData.qty.map((q) => {
           return <option value={q} key={q}>{q}kg</option >
          })}
          {/* <option value="2">{productData.qty}kg</option>
          <option value="3">{productData.qty}kg</option>
          <option value="4">{productData.qty}kg</option>
          <option value="5">{productData.qty}kg</option> */}
        </select>
        <div className='letter'>
          <p className={productData.class}>{productData.letter}</p>
        </div>
      </div>
    </>
  )
}


export default CartItem;
