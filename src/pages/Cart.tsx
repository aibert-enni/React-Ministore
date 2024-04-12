import { Link } from "react-router-dom"
import { useAppSelector } from "../hooks/redux"
import { ROUTES_PATHS } from "../router/types"
import CartProductList from "../components/cart/CartProductList"

const Cart = () => {
    const cartProducts = useAppSelector(state => state.cart)

    return (
        <div className='container-lg my-28'>
            <CartProductList cartProducts={cartProducts} />
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
                    <Link className={`button ${cartProducts.productAmount <= 0 && 'pointer-events-none opacity-70'}`} to={ROUTES_PATHS.CHECKOUT}>
                        Proceed to checkout
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Cart