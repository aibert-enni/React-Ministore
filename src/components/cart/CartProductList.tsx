import { FC } from 'react'
import { CartState } from '../../store/slices/CartSlice'
import CartProduct from './CartProduct'

interface CartProductListProps {
    cartProducts: CartState
}

const CartProductList: FC<CartProductListProps> = ({ cartProducts }) => {
    return (
        <div className="grid grid-cols-[50%_25%_25%] font-jost uppercase w-full mb-20 *:border-b *:border-[#CDCDCD] text-xl *:flex *:items-center *:py-5">
            <p className="pb-5">Product</p>
            <p className="pb-5">Quantity</p>
            <p className="pb-5">Subtotal</p>
            {cartProducts.products.map(cartProduct => <CartProduct cartProduct={cartProduct} />)}
        </div>
    )
}

export default CartProductList