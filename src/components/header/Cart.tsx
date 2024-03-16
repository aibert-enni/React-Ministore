import { useState } from 'react'
import cartIcon from '../../assets/cart_icon.svg'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { deleteProduct } from '../../store/slices/CartSlice'

const Cart = () => {
  const [isShow, setIsShow] = useState<boolean>(false)

  const cart = useAppSelector(state => state.cart)
  const dispatch = useAppDispatch()

  return (
    <div className='flex-col'>
      <div className='flex cursor-pointer' onClick={() => setIsShow(!isShow)}>
        <img src={cartIcon} alt="cart icon" />
        <p>
          ({cart.productAmount})
        </p>
      </div>
      <div className={`bg-white absolute p-1 border-grey-75 border ${!isShow && 'hidden'}`}>
        {cart.products.map(cartProduct => {
          return (
            <>
              <div className='flex p-2 gap-2 items-center'>
                <img className='h-14 w-10' src={cartProduct.product.img_url} alt="" />
                <div>
                  <p>{cartProduct.product.name}</p>
                  <p className='text-xs'>{cartProduct.amount} * <span className='font-bold'>{cartProduct.product.price}$</span></p>
                </div>
                <p onClick={() => dispatch(deleteProduct(cartProduct.product.name))}>X</p>
              </div>
            </>
          )
        }
        )}
        <hr />
        <p className='text-center'>Total: <span className='font-bold'>{cart.totalPrice}$</span></p>
      </div>
    </div>
  )
}

export default Cart