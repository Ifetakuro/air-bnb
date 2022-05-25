import { NavLink } from 'react-router-dom'
import {CgProfile} from 'react-icons/cg'
import {BiLogOut} from 'react-icons/bi'
import {FaShoppingBasket, FaHistory} from 'react-icons/fa'
import '../styles/Sidebar.css'
import Logo from '../images/logo-svg.png'

function Sidebar() {
  return (
    <>
      <aside className="sidebar">
        <nav>
          <div>
            <img src={Logo} alt="Logo" />
          </div>
          <ul>
            <li>
              <NavLink to="/" className='side-link'
              activeclassname="active"><CgProfile /><span className='link-span'>Profile</span> </NavLink>
            </li>
            <li>
              <NavLink to="/baskets" className='side-link'
              activeclassname="active"> <FaShoppingBasket /><span className='link-span'>Basket</span></NavLink>
            </li>
            <li>
              <NavLink to="/history" className='side-link'
              activeclassname="active"> <FaHistory /><span className='link-span'>Order History</span></NavLink>
            </li>
          </ul>
        </nav>
        <div className='logout'>
          <h2>LE</h2>
          <h3>Laura Edson</h3>
          <p>lauraedson@work.com</p>
          <span><BiLogOut /> </span>
        </div>
      </aside>
    </>
  )
}

export default Sidebar