import { Link, useLocation } from 'react-router-dom'

import { ROUTES_PATHS } from '../router/types'
import logo from '../assets/logo.svg'
import searchIcon from '../assets/search_icon.svg'
import personIcon from '../assets/person_icon.svg'
import Cart from './Cart'
import Breadcrumbs from './Breadcrumbs'

export const navItems = [
  { name: 'Home', path: ROUTES_PATHS.HOME },
  { name: 'Shop', path: ROUTES_PATHS.SHOP },
  { name: 'About', path: 'about' },
  { name: 'Blogs', path: 'blogs' },
  { name: 'Contact', path: 'contact' }
]

const BreadcrumbsPaths: string[] = [ROUTES_PATHS.SHOP]

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
            <div className='flex gap-10 mr-28'>
              {navItems.map(item => <Link className='uppercase font-medium hover:underline underline-offset-2' to={item.path}>{item.name}</Link>)}
            </div>
            <div className='flex gap-5 items-center'>
              <img className='cursor-pointer' src={searchIcon} alt="search icon" />
              <Link to='signIn'>
                <img src={personIcon} alt="sign icon" />
              </Link>
              <Cart />
            </div>
          </div>
        </nav>
      </header>
      {BreadcrumbsPaths.includes(pathname) && <Breadcrumbs currentPath={pathname.slice(1)} />}
    </div>
  )
}

export default Header