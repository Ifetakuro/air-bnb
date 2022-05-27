
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
        <select name="kg" id="kg" onChange={(e) => onValue(productData.price, e)}>
          {productData.qty.map((q) => {
           return <option value={q} key={q}>{q}kg</option >
          })}
        </select>
        <div className='letter'>
          <p className={productData.class[0]}>{productData.letter[0]}</p>
          {productData.letter[1] && <p className={productData.class[1]}>{productData.letter[1]}</p>}
        </div>
      </div>
    </>
  )
}


export default CartItem;
