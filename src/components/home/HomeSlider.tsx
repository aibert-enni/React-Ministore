import { Link } from 'react-router-dom'

import mainImage from '../../assets/homepage_image.png'

const HomeSlider = () => {
  return (
    <div className=' bg-grey-10 flex justify-between items-center'>
      <div className='container-lg flex items-center'>
        <div className='max-w-lg'>
          <p className='font-light text-6xl uppercase mb-14'>
            Your Products are great.
          </p>
          <Link className='button' to='shop'>
            shop product
          </Link>
        </div>
        <img className='max-w-md' src={mainImage} alt="" />
      </div>
    </div>
  )
}

export default HomeSlider