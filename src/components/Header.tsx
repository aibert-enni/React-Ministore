import { Link } from 'react-router-dom'

import { ROUTES } from '../router/types'
import logo from '../assets/logo.svg'
import searchIcon from '../assets/search_icon.svg'
import personIcon from '../assets/person_icon.svg'
import Cart from './Cart'

export const navItems = [
  { name: 'Home', path: ROUTES.HOME },
  { name: 'Shop', path: 'pages' },
  { name: 'About', path: 'about' },
  { name: 'Blogs', path: 'blogs' },
  { name: 'Contact', path: 'contact' }
]

const Header = () => {
  
  return (
    <div className='container mx-auto max-w-screen-lg'>
      <header className='py-3'>
        <nav className='flex justify-between items-center'>
          <div>
            <img className='w-32' src={logo} alt="" />
          </div>
          <div className='flex justify-between items-center'>
            <div className='flex gap-10 mr-28'>
              {navItems.map(item => <Link className='uppercase font-medium' to={item.path}>{item.name}</Link>)}
            </div>
            <div className='flex gap-5 items-center'>
              <img src={searchIcon} alt="search icon" />
              <Link to='signIn'>
                <img src={personIcon} alt="sign icon" />
              </Link>
              <Cart/>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Header