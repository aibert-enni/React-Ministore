import { Link } from "react-router-dom"
import QuantityButtons from "../features/QuantityButtons"
import { useAppDispatch, useAppSelector } from "../hooks/redux"
import { addProduct } from "../store/slices/CartSlice"
import { ROUTES_PATHS } from "../router/types"

const Cart = () => {
    const cartProducts = useAppSelector(state => state.cart)
    return (
        <div className='container-lg my-28'>
            <div className="grid grid-cols-3 uppercase w-full mb-20 *:border-b *:border-[#CDCDCD] text-xl *:flex *:items-center *:py-5">
                <p className="pb-5">Product</p>
                <p className="pb-5">Quantity</p>
                <p className="pb-5">Subtotal</p>
                {cartProducts.products.map(cartProduct => {
                    return (
                        <>
                            <div className="gap-3">
                                <img className="w-[151px] h-[151px]" src={cartProduct.product.img_url} alt="" />
                                <div>
                                    <p>{cartProduct.product.name}</p>
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
                })}
            </div>
            <div className="uppercase">
                <p className="text-2xl mb-7">cart totals</p>
                <div className="grid text-xl grid-cols-2 py-5 border-y border-[#CDCDCD]">
                    <p className="">Total</p>
                    <p className="text-[#72AEC8]">${cartProducts.totalPrice}.00</p>
                </div>
                <div className="flex gap-5 mt-7">
                    <Link className="button" to={ROUTES_PATHS.SHOP}>
                        Continue shopping
                    </Link>
                    <Link className="button" to={ROUTES_PATHS.SHOP}>
                        Proceed to checkout
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Cart