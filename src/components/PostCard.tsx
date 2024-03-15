import { FC } from "react"
import { IPostCard } from "../models/apiModels"
import { Link } from "react-router-dom"


interface PorstCardProps {
  postCard: IPostCard
}

const PostCard: FC<PorstCardProps> = ({ postCard }) => {
  return (
    <Link className="group" to={postCard.postId}>
      <img className="w-[420x] h-[240px]" src={postCard.img_url} alt="" />
      <div className="title flex-col mt-4">
        <p className="text-[#848484]">{postCard.date} - {postCard.category}</p>
        <p className="group-hover:text-[#72AEC8] text-xl mt-1">
          {postCard.title}
        </p>
      </div>
    </Link>
  )
}

export default PostCard