import { FC, useState } from 'react'
import { Product } from '../../models/apiProductModels'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../../hooks/redux'
import { addProduct } from '../../store/slices/CartSlice'
import { ROUTES_PATHS } from '../../router/types'
import QuantityButtons from '../../features/QuantityButtons'
import productConverter from '../../utils/productConverter'

interface ProductSummaryProps {
    product: Product
}

const ProductSummary: FC<ProductSummaryProps> = ({ product }) => {
    const [buyAmount, setBuyAmount] = useState<number>(1)
    const [chosenColor, setColor] = useState<string>(product.color[0])
    const [chosenSize, setSize] = useState<string>(product.size[0])

    const dispatch = useAppDispatch()

    const cartProduct = productConverter(product)

    const handleAddProduct = () => {
        cartProduct.color = chosenColor
        cartProduct.size = chosenSize
        dispatch(addProduct({ product: cartProduct, amount: buyAmount }))
    }


    return (
        <div className='flex gap-5'>
            <img className='w-[500px] h-[600px]' src={product?.img_url} alt="product photo" />
            <div className='flex flex-col gap-4 font-jost text-black-2'>
                <h1 className='uppercase text-[30px] textblack-1'>{product?.name}</h1>
                <p className='text-[#72AEC8] text-[40px] font-lato'>${product?.price}.00</p>
                <p className='font-lato font-light'>{product?.description}</p>
                <div>
                    <p className='uppercase font-jost underline underline-offset-2 text-xl decoration-1 mb-2'>Color</p>
                    <div className='flex font-lato gap-5'>
                        {product?.color.map(color => <p onClick={() => setColor(color)} className={`cursor-pointer ${color === chosenColor ? "text-[#72AEC8]" : 'hover:text-[#72AEC8]'}`}>{color}</p>)}
                    </div>
                </div>
                <div>
                    <p className='uppercase font-jost underline underline-offset-2 text-xl decoration-1 mb-2'>size</p>
                    <div className='flex font-lato gap-5'>
                        {product?.size.map(size => <p onClick={() => setSize(size)} className={`cursor-pointer ${size === chosenSize ? "text-[#72AEC8]" : 'hover:text-[#72AEC8]'}`}>{size}</p>)}
                    </div>
                </div>
                <div className='font-lato'>
                    <p className='mb-3'>{product?.available} in stock</p>
                    <QuantityButtons quantity={buyAmount} availableAmount={product?.available} setQuantity={setBuyAmount} />
                </div>
                <div className='my-4 flex gap-4'>
                    <Link className='button bg-[#72AEC8]  flex items-center' to={ROUTES_PATHS.CART}>
                        buy now
                    </Link>
                    <button onClick={() => handleAddProduct()} className='button'>
                        add to cart
                    </button>
                </div>
                <p className='capitalize font-lato'>Category: {product?.category}</p>
            </div>
        </div>
    )
}

export default ProductSummary