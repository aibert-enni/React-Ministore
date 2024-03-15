import React, { FC } from 'react'
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { productApi } from '../services/ProductService';
import quoteIcon from '../assets/quoteIcon.svg'
import checkedStar from '../assets/star_checked_icon.svg'
import unchekedStar from '../assets/star_unchecked_icon.svg'

interface TestimonialsSliderProps {
    limit: number
}

const TestimonialsSlider: FC<TestimonialsSliderProps> = ({ limit = 5 }) => {
    const { data: testimonials } = productApi.useFetchTestimonialsQuery(limit)
    const starRate = (rate: number) => {
        const content = []
        for(let i = 1; i <= 5; i++) {
            if(i <= rate) {
                content.push(<img className='max-w-4' src={checkedStar}/>)
            } else {
                content.push(<img className='max-w-4' src={unchekedStar}/>)
            }
        }
        return content
    }

    return (
        <div className='flex flex-col items-center mt-32'>
            <img src={quoteIcon} alt="quote icon" />
            <Swiper className='max-w-screen-lg' navigation={true} modules={[Navigation]} >
                {testimonials?.map(testimonial =>
                    <SwiperSlide className='flex flex-col justify-center items-center'>
                        <p className='text-3xl font-light'>“{testimonial.text}.”</p>
                        <div className='flex flex-col justify-center items-center mt-8'>
                            <div className='flex gap-2'>
                                {starRate(testimonial.rate)}
                            </div>
                            <p className='uppercase font-medium tracking-widest'>{testimonial.username}</p>
                        </div>
                    </SwiperSlide>)}
            </Swiper>

        </div>
    )
}

export default TestimonialsSlider