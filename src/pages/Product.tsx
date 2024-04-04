import { useParams } from 'react-router-dom'
import { appApi } from '../services/ApiService'
import { useState } from 'react'
import ProductDescription from '../components/productPage/ProductDescription'
import ProductSummary from '../components/productPage/ProductSummary'
import ProductReviews from '../components/productPage/ProductReviews'
import ProductsSlider from '../components/product/ProductsSlider'
import { skipToken } from '@reduxjs/toolkit/query'

enum SECTION_NAMES {
    DESCRIPTION,
    REVIEWS,
}

const Product = () => {
    const { id } = useParams()

    const { data: productList } = appApi.useFetchByIdQuery(id ? id : '0')

    const product = productList ? productList[0] : undefined

    const [section, setSection] = useState<SECTION_NAMES>(SECTION_NAMES.DESCRIPTION)

    const { data: products } = appApi.useFetchByCategoryQuery(product?.category ? product?.category : skipToken)

    function showSection() {
        switch (section) {
            case SECTION_NAMES.DESCRIPTION:
                return <ProductDescription text={product?.description} />
                break;
            case SECTION_NAMES.REVIEWS:
                return <ProductReviews reviews_ids={product?.reviews_ids} />
                break
            default:
                break;
        }
    }

    return (
        <div className='container-lg flex flex-col gap-28 my-28'>
            {product && <ProductSummary product={product} />}
            <div>
                <div className='flex justify-center gap-14 mb-5'>
                    <p onClick={() => setSection(SECTION_NAMES.DESCRIPTION)} className={`uppercase cursor-pointer text-3xl ${section === SECTION_NAMES.DESCRIPTION ? 'text-[#72AEC8]' : ''}`}>Description</p>
                    <p onClick={() => setSection(SECTION_NAMES.REVIEWS)} className={`uppercase cursor-pointer text-3xl ${section === SECTION_NAMES.REVIEWS ? 'text-[#72AEC8]' : ''}`}>Reviews ({product?.reviews_ids ? product.reviews_ids.length : 0})</p>
                </div>
                <div className='border-y border-[#CDCDCD] py-7'>
                    {showSection()}
                </div>
            </div>
            <ProductsSlider products={products} category='Related' />
        </div>
    )
}

export default Product