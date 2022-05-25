import { useState } from 'react'
import Shop from '../../images/shop.png'

function BasketTabs() {

  const [showState, setShowState] = useState(1);

  const showTab = (index) => {
    setShowState(index)
  }

  return (
    <>
      <div className='tab-container'>
        <div className='tabs'>
          <div 
          className={showState === 1 ? 'tab active-tab' : 'tab'} 
          onClick={() => showTab(1)}>
            Paid
          </div>
          <div 
          className={showState === 2 ? 'tab active-tab' : 'tab'}
           onClick={() => showTab(2)}>
             Pending
          </div>
          <div 
          className={showState === 3 ? 'tab active-tab' : 'tab'}
           onClick={() => showTab(3)}>
             Completed
          </div>
        </div>
        <div className='tab-contents'>
          <div 
            className={showState === 1 ? 'tab-content active-content' : 'tab-content'}>
            <div className='tab-logo'>
              <img src={Shop} alt="Shop Icon" />
            </div>
            <div>
              <p>No Paid Baskets, yet!</p>
            </div>
          </div>
          <div 
            className={showState === 2 ? 'tab-content active-content' : 'tab-content'}>
            <div className='tab-logo'>
              <img src={Shop} alt="Shop Icon" />
            </div>
            <div>
              <p>No Pending Baskets, yet!</p>
            </div>
          </div>
          <div 
            className={showState === 3 ? 'tab-content active-content' : 'tab-content'}>
            <div className='tab-logo'>
              <img src={Shop} alt="Shop Icon" />
            </div>
            <div>
              <p>No Completed Baskets, yet!</p>
            </div>
          </div>
        </div>
      </div>
    
    </>
  )
}

export default BasketTabs