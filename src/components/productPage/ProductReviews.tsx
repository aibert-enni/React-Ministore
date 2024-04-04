import { FC } from 'react'
import { appApi } from '../../services/ApiService'
import { skipToken } from '@reduxjs/toolkit/query'

import avatarIcon from '../../assets/avatar-15.svg'
import { starRate } from '../../features/starRate'

interface ProductReviewsProps {
    reviews_ids?: string[]
}

const ProductReviews: FC<ProductReviewsProps> = ({ reviews_ids }) => {
    const { data: reviews } = appApi.useFetchReviewsByIdsQuery(reviews_ids ? reviews_ids : skipToken)


    return (
        <div className='flex flex-col gap-4'>
            {reviews?.map(review =>
                <div className='border border-[#CDCDCD] rounded-md p-2'>
                    <div className='flex items-center gap-3'>
                        <img className='w-8 font-medium' src={avatarIcon} alt="" />
                        <p>{review.username}</p>
                    </div>
                    <p className='font-light py-2'>{review.text}</p>
                    <div className='flex'>{starRate(review.rate)}</div>
                    <p className='font-light pt-1'>{review.date}</p>
                </div>
            )}
        </div>
    )
}

export default ProductReviews