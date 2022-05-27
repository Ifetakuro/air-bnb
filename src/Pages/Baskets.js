import {React, useState} from 'react'
import '../styles/Baskets.css'
import OrderTrack from '../components/OrderTrack'
import Bus from '../images/truck.png'
import Card from '../images/creditcard.png'
import Gift from '../images/gift.png'
import {BiSearch} from 'react-icons/bi'
import BasketTabs from '../components/Basket/BasketTabs'
import BasketExtraInfo from '../components/Basket/BasketExtraInfo'
import CartBtn from '../components/Cart/CartBtn'
import Cart from '../components/Cart/Cart'
import '../styles/Cart.css'

function Baskets() {
  const [cartBar, setCartBar] = useState(false)

  const showCart = () => setCartBar(!cartBar)

  const hours = new Date().getHours()
  let greeting
  if (hours >= 0 && hours < 12) {
    greeting = 'Morning';
  } else if (hours >= 12 && hours < 16) {
    greeting = 'Afternoon'
  } else if (hours >= 16 && hours < 19) {
    greeting = 'Evening'
  } else {
    greeting = 'Night'
  }


  const track = [
    {
      name: 'In-Transit Jobs',
      logo: Bus,
      amount: 0
    },
    {
      name: 'Total Paid',
      logo: Card,
      amount: '$0.00'
    },
    {
      name: 'Completed Jobs',
      logo: Gift,
      amount: 0
    },
  ]

  const extra = [
    {
      name: 'INVITES',
      nameInfo: 'You have no invites.'
    },
    {
      name: 'RECENT PAYMENTS',
      nameInfo: 'No Payment has been made. '
    },
    {
      name: 'PREVIOUS ORDERS',
      nameInfo: 'You have created no order.'
    },
  ]
  return (
    <div className='container-body'>
      <div className="container">
        <main>
          <section>
            <div className='heading-div'>
              <h1>Good {greeting}, Laura!</h1>
              <div className='search-div'>
                <BiSearch className='search-icon'/>
                <input type="search" name="search" id="search" placeholder='Search Basket'/>
              </div>
            </div>
            <div className='track-div'>
              {track.map((item, index) => {
                return (
                  <OrderTrack img={item.logo} key={index} name={item.name} int={item.amount}/>
                )
              })}
            </div>
          </section>
          <section className="baskets">
            <div className="baskets-heading">
              <h3>Baskets</h3>
              <button>Create Basket</button>
            </div>
            <div>
              <BasketTabs />
            </div>
          </section>
        </main>
        <aside className='extra-aside'>
          {extra.map((item, index) => {
            return (
              
              <BasketExtraInfo title={item.name} info={item.nameInfo} key={index}/>
            )
          })}
        </aside>
      </div>
      <div>
        <CartBtn click={showCart} class={'cart-icon'}/>
      </div>
      <div>
        {/* <Cart className={cartBar ? 'show' : 'cartshow'} /> */}
        <Cart 
        cartClass={!cartBar ? 'cart-div' : 'cart-div cart-active'}
        cartClick={showCart}/>
      </div>
    </div>
  )
}

export default Baskets
