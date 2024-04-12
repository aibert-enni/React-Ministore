import { FC } from 'react'
import { ICart } from '../../store/slices/CartSlice'
import QuantityButtons from '../../features/QuantityButtons'

interface CartProductProps {
    cartProduct: ICart
}

const CartProduct: FC<CartProductProps> = ({ cartProduct }) => {
    return (
        <>
            <div className="gap-3">
                <img className="w-[151px] h-[151px]" src={cartProduct.product.img_url} alt="" />
                <div>
                    <p>{cartProduct.product.name} {cartProduct.product.color} {cartProduct.product.size}</p>
                    <p className="text-[#72AEC8]">${cartProduct.product.price}.00</p>
                </div>
            </div>
            <div>
                <QuantityButtons quantity={cartProduct.amount} availableAmount={cartProduct.product.available} product={cartProduct.product} />
            </div>
            <div>
                <p className="text-[#72AEC8] font-medium text-3xl">${cartProduct.amount * cartProduct.product.price}.00</p>
            </div>
        </>
    )
}

export default CartProduct