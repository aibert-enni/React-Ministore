import { FC, useState } from 'react';
import { useAppDispatch } from '../hooks/redux';
import { addProduct} from '../store/slices/CartSlice';
import { IProduct } from '../models/apiModels';

interface Product_card_Props {
  product: IProduct
}

const Product_card: FC<Product_card_Props> = ({product}) => {
  const [isShown, setIsShown] = useState<boolean>(false);

  const dispatch = useAppDispatch()

  return (
    <div className="card flex-col gap-11 flex-shrink-0">
      <div className='relative' onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
        <img className='w-[310px] h-[418px]' src={product.img_url} alt="iphone 10" />
        <button onClick={() => dispatch(addProduct({product, amount: 1}))} className={`uppercase absolute bottom-5 translate-x-2/4 bg-black-1 text-white font-medium py-2 px-7 ${isShown ? 'opacity-100' : 'opacity-0'}`}>
          Add to card
        </button>
      </div>
      <div className='flex justify-between items-center'>
        <p className='capitalize text-xl'>
          {product.name}
        </p>
        <p className='text-xl text-[#72AEC8]'>
          ${product.price}
        </p>
      </div>
    </div>  
  )
}

export default Product_card