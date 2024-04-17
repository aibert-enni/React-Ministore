import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import Product_card from './ProductCard'
import { Product } from '../../models/apiProductModels'


interface ProductsSliderProps {
    products?: Product[],
    category: string
}

const ProductsSlider: FC<ProductsSliderProps> = ({ products, category }) => {
    return (
        <div className="products-slider">
            <div className="title flex justify-between items-center">
                <p className='uppercase text-3xl font-jost'>
                    {category} products
                </p>
                <Link className='uppercase font-lato font-normal decoration-[#E1E1E1] decoration-2 hover:underline underline-offset-4' to={'/shop'}>
                    Go to shop
                </Link>
            </div>
            <Swiper className='MySwiper mt-8' slidesPerView={4} spaceBetween={20} modules={[Pagination]} pagination={{ clickable: true }} >
                {products?.map(product => <SwiperSlide><Product_card product={product} /></SwiperSlide>)}
            </Swiper>
        </div>
    )
}

export default ProductsSlider