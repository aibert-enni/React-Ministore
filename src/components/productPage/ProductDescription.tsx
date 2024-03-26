import { FC } from 'react'

interface ProductDescriptionProps {
    text?: string
}

const ProductDescription: FC<ProductDescriptionProps> = ({ text }) => {
    return (
        <div className='flex flex-col text-[#3A3A3A] font-light'>
            <p>Product Description</p>
            <p>{text}</p>
        </div>
    )
}

export default ProductDescription