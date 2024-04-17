import { FC } from "react"
import { CartState, deleteProduct } from "../../store/slices/CartSlice"
import { useAppDispatch } from "../../hooks/redux"

interface CartDropdownProps {
    cart: CartState
}

const CartDropdown: FC<CartDropdownProps> = ({ cart }) => {
    const dispatch = useAppDispatch()

    return (
        <>
            <p className='text-center text-grey-75'>Total: <span className='text-blue font-normal'>${cart.totalPrice}</span></p>
            <div className="bg-grey-75 h-[0.5px] w-full my-2"></div>
            {cart.products.map(cartProduct => {
                return (
                    <>
                        <div className='flex p-2 gap-2 items-center'>
                            <img className='h-14 w-10' src={cartProduct.product.img_url} alt="" />
                            <div>
                                <p>{cartProduct.product.name}</p>
                                <div className="flex gap-1 text-xs">
                                    <p className='text-blue'>${cartProduct.product.price}</p>
                                    <p className=' text-grey-75'>Quantity: {cartProduct.amount}</p>
                                </div>
                            </div>
                            <p className='cursor-pointer' onClick={() => dispatch(deleteProduct(cartProduct.product.name))}>X</p>
                        </div>
                    </>
                )
            }
            )}
        </>
    )
}

export default CartDropdown