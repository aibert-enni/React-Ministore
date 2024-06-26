import { FC, useState } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { ICartProduct, addProduct } from '../../store/slices/CartSlice';
import { Product } from '../../models/apiProductModels';
import { Link } from 'react-router-dom';
import productConverter from '../../utils/productConverter';

interface ProductCardProps {
  product: Product
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const [isShown, setIsShown] = useState<boolean>(false);

  const dispatch = useAppDispatch()

  const cartProduct: ICartProduct = productConverter(product)

  return (
    <Link to={'/product/' + product.id} className="card flex flex-col gap-2 flex-shrink-0">
      <div className='relative' onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
        <img className='w-[280px] h-[318px]' src={product.img_url} alt="iphone 10" />
        <button onClick={(e) => {
          e.preventDefault()
          dispatch(addProduct({ product: cartProduct, amount: 1 }))
        }} className={`uppercase absolute bottom-5 translate-x-2/4 right-2/4 bg-black-1 text-white font-lato font-normal py-2 px-7 ${isShown ? 'opacity-100' : 'opacity-0'}`}>
          Add to card
        </button>
      </div>
      <div className='flex justify-between items-center'>
        <p className='capitalize text-xl font-jost'>
          {product.name}
        </p>
        <p className='text-xl font-lato text-[#72AEC8]'>
          ${product.price}
        </p>
      </div>
    </Link>
  )
}

export default ProductCard