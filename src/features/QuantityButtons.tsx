import { FC } from "react"
import { useAppDispatch } from "../hooks/redux"
import { ICartProduct, addProduct } from "../store/slices/CartSlice"
import { IProduct } from "../models/apiModels"

interface QualityButtonsProps {
    quantity: number,
    availableAmount?: string,
    setQuantity?: (quantity: number) => void,
    product?: ICartProduct
}

const QuantityButtons: FC<QualityButtonsProps> = ({ quantity, availableAmount, setQuantity, product }) => {
    const dispatch = useAppDispatch()

    function incrementBuyAmount() {
        if (Number(availableAmount) > quantity) {
            if (setQuantity) {
                setQuantity(quantity + 1)
            } else {
                product && dispatch(addProduct({ product, amount: 1 }))
            }
        }
    }

    function decrementBuyAmount() {
        if (quantity > 1) {
            if (setQuantity) {
                setQuantity(quantity - 1)
            } else {
                product && dispatch(addProduct({ product, amount: -1 }))
            }
        }
    }
    return (
        <div className='flex gap-2'>
            <button onClick={() => decrementBuyAmount()} className='bg-white w-[44px] h-[44px] border border-[#EEEEEE] shadow'>
                -
            </button>
            <button className='bg-white w-[90px] h-[44px] border border-[#EEEEEE] shadow'>
                {quantity}
            </button>
            <button onClick={() => incrementBuyAmount()} className='bg-white w-[44px] h-[44px] border border-[#EEEEEE] shadow'>
                +
            </button>
        </div>
    )
}

export default QuantityButtons