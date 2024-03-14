import { FC } from "react"
import { IPostCard } from "../models/apiModels"
import { Link } from "react-router-dom"


interface Porst_card_Props {
    postCard: IPostCard
}

const Post_card: FC<Porst_card_Props> = ({postCard}) => {
  return (
    <Link to={postCard.postId}>
      <div className="cursor-pointer">
        <img className="w-[420x] h-[240px]" src={postCard.img_url} alt="" />
        <div className="title flex-col mt-4">
            <p className="text-[#848484]">{postCard.date} - {postCard.category}</p>
            <p className="text-xl mt-1">
                {postCard.title}
            </p>
        </div>
    </div>
    </Link>
  )
}

export default Post_card