import { FC } from "react"
import { Post } from "../../models/apiBlogModels"
import { Link } from "react-router-dom"


interface PostCardProps {
  postCard: Post
}

const PostCard: FC<PostCardProps> = ({ postCard }) => {

  return (
    <Link className="group" to={'/post/' + postCard.id}>
      <img className="w-[420x] h-[240px]" src={postCard.coverLink} alt="" />
      <div className="title flex-col mt-4">
        <p className="text-[#848484]">{postCard.date} - {postCard.categories && postCard.categories.join(' ')}</p>
        <p className="group-hover:text-[#72AEC8] text-xl mt-1">
          {postCard.title}
        </p>
      </div>
    </Link>
  )
}

export default PostCard