import { FC } from 'react'
import { PostComment as CommentType } from '../models/apiBlogModels'
import { appApi } from '../services/ApiService'

import icon from '../assets/account_avatar_face_man_people_profile_user_icon_123197.svg'

interface PostCommentProps {
    comment: CommentType
}

const PostComment: FC<PostCommentProps> = ({ comment }) => {
    const { data: user } = appApi.useFetchUserByIdQuery(comment.user_id)
    return (
        <div className='flex gap-4 items-center'>
            <img className='w-9' src={icon} alt="" />
            <div>
                <p className='uppercase font-medium text-sm'>{user && user[0].firstname + " " + user[0].lastname}</p>
                <p className='text-black-2 font-light'>{comment.comment}</p>
            </div>
        </div>
    )
}

export default PostComment