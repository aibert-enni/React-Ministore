import { FC, useState } from 'react'
import { IProduct } from '../../models/apiModels'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../../hooks/redux'
import { addProduct } from '../../store/slices/CartSlice'

interface ProductSummaryProps {
    product?: IProduct
}

const ProductSummary: FC<ProductSummaryProps> = ({ product }) => {
    const [buyAmount, setBuyAmount] = useState<number>(1)

    const dispatch = useAppDispatch()

    function incrementBuyAmount() {
        if (Number(product?.available) > buyAmount) {
            setBuyAmount(buyAmount + 1)
        }
    }

    function decrementBuyAmount() {
        if (buyAmount > 1) {
            setBuyAmount(buyAmount - 1)
        }
    }

    return (
        <div className='flex gap-5'>
            <img className='w-[500px] h-[600px]' src={product?.img_url} alt="product photo" />
            <div className='flex flex-col gap-4 text-[#3A3A3A]'>
                <h1 className='uppercase text-[30px] text[#272727]'>{product?.name}</h1>
                <p className='text-[#72AEC8] text-[40px]'>${product?.price}.00</p>
                <p className='font-light'>{product?.description}</p>
                <div>
                    <p className='uppercase underline underline-offset-2 text-xl decoration-1 mb-2'>Color</p>
                    <div className='flex gap-5'>
                        {product?.color.map(color => <p className='cursor-pointer hover:text-[#72AEC8]'>{color}</p>)}
                    </div>
                </div>
                <div>
                    <p className='uppercase underline underline-offset-2 text-xl decoration-1 mb-2'>size</p>
                    <div className='flex gap-5'>
                        {product?.size.map(size => <p className='cursor-pointer uppercase hover:text-[#72AEC8]'>{size}</p>)}
                    </div>
                </div>
                <div>
                    <p className='mb-3'>{product?.available} in stock</p>
                    <div className='flex gap-2'>
                        <button onClick={() => decrementBuyAmount()} className='bg-white w-[44px] h-[44px] border border-[#EEEEEE] shadow'>
                            -
                        </button>
                        <button className='bg-white w-[90px] h-[44px] border border-[#EEEEEE] shadow'>
                            {buyAmount}
                        </button>
                        <button onClick={() => incrementBuyAmount()} className='bg-white w-[44px] h-[44px] border border-[#EEEEEE] shadow'>
                            +
                        </button>
                    </div>
                </div>
                <div className='my-4 flex gap-4'>
                    <Link className='button bg-[#72AEC8]  flex items-center' to={'/cart'}>
                        buy now
                    </Link>
                    <button onClick={() => dispatch(addProduct({ product, amount: buyAmount }))} className='button'>
                        add to cart
                    </button>
                </div>
                <p className='capitalize'>Category: {product?.category}</p>
            </div>
        </div>
    )
}

export default ProductSummary