import { FC } from "react"
import { Link } from "react-router-dom"
import { Pagination } from "swiper/modules"
import { SwiperSlide, Swiper } from "swiper/react"
import Post_card from "./PostCard"
import { PostCard } from "../../models/apiBlogModels"

interface PostCard_slider_Props {
  postCards?: PostCard[],
  category: string
}

export const PostCard_slider: FC<PostCard_slider_Props> = ({ postCards, category }) => {
  return (
    <div className="products-slider">
      <div className="title flex justify-between items-center">
        <p className='uppercase text-3xl'>
          {category} posts
        </p>
        <Link className='uppercase font-medium decoration-[#E1E1E1] decoration-2 hover:underline underline-offset-4' to={'/blog'}>
          read blogs
        </Link>
      </div>
      <Swiper className='MySwiper mt-8' slidesPerView={4} spaceBetween={20} modules={[Pagination]} pagination={{ clickable: true }} >
        {postCards?.map(postCard => <SwiperSlide><Post_card postCard={postCard} /></SwiperSlide>)}
      </Swiper>
    </div>
  )
}