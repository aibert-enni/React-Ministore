import { useLocation } from 'react-router-dom'

import { ROUTES_PATHS } from '../../router/types'
import logo from '../../assets/logo.svg'
import searchIcon from '../../assets/search_icon.svg'
import Breadcrumbs from './Breadcrumbs'
import NavItems from './NavItems'
import CartDropdown from './CartDropdown'
import AccountNav from './AccountNav'
import { useEffect } from 'react'
import { User } from '../../models/User'

export const navItems = [
  { name: 'Home', path: ROUTES_PATHS.HOME },
  { name: 'Shop', path: ROUTES_PATHS.SHOP },
  { name: 'About', path: ROUTES_PATHS.ABOUT },
  { name: 'Blogs', path: 'blogs' },
  { name: 'Contact', path: 'contact' }
]

const BreadcrumbsPaths: string[] = [ROUTES_PATHS.SHOP, ROUTES_PATHS.ABOUT, ROUTES_PATHS.CART, ROUTES_PATHS.CHECKOUT]

const Header = () => {
  const { pathname } = useLocation()



  return (
    <div className='header'>
      <header className='container mx-auto max-w-screen-lg py-3'>
        <nav className='flex justify-between items-center'>
          <div>
            <img className='w-32' src={logo} alt="" />
          </div>
          <div className='flex justify-between items-center'>
            <NavItems />
            <div className='flex gap-5 items-center'>
              <img className='cursor-pointer' src={searchIcon} alt="search icon" />
              <AccountNav />
              <CartDropdown />
            </div>
          </div>
        </nav>
      </header>
      {BreadcrumbsPaths.includes(pathname) && <Breadcrumbs currentPath={pathname.slice(1)} />}
    </div>
  )
}

export default Header