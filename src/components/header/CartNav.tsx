import cartIcon from '../../assets/cart_icon.svg'
import { useAppSelector } from '../../hooks/redux'
import CartDropdown from './CartDropdown'

const CartNav = () => {
  const cart = useAppSelector(state => state.cart)

  return (
    <div className='flex-col group relative'>
      <div className='flex cursor-pointer'>
        <img src={cartIcon} alt="cart icon" />
        <p>
          ({cart.productAmount})
        </p>
      </div>
      <div className='bg-white absolute right-0 p-2 w-[200px]  flex-col items-center  shadow rounded-md hidden group-hover:flex'>
        {cart.productAmount > 0 ? <CartDropdown cart={cart} /> : <p>Empty</p>}
      </div>
    </div>
  )
}

export default CartNav