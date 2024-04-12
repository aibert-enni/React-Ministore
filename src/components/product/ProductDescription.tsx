import { FC } from 'react'

interface ProductDescriptionProps {
    text?: string
}

const ProductDescription: FC<ProductDescriptionProps> = ({ text }) => {
    return (
        <div className='flex flex-col text-black-2 font-light'>
            <p>Product Description</p>
            <p>{text}</p>
        </div>
    )
}

export default ProductDescription