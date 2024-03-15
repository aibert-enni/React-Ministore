import { Link } from 'react-router-dom'

import sliderArrow from '../assets/slider_arrow.svg'
import mainImage from '../assets/homepage_image.png'

const HomeSlider = () => {
  return (
    <div className='bg-grey-10 flex justify-between items-center'>
        <img className='cursor-pointer' src={sliderArrow} alt="left slider arrow" />
        <div className='flex items-center'>
          <div className='max-w-lg'>
            <p className='font-light text-6xl uppercase mb-14'>
              Your Products are great.
            </p>
            <Link className='uppercase font-medium bg-black-1 px-12 py-4 text-white' to='shop'>
              shop product
            </Link>
          </div>
          <img className='max-w-md' src={mainImage} alt="" />
        </div>
        <img className='cursor-pointer rotate-180' src={sliderArrow} alt="left slider arrow" />
      </div>
  )
}

export default HomeSlider