import { skipToken } from '@reduxjs/toolkit/query'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useAppSelector } from '../../hooks/redux'
import { appApi } from '../../services/ApiService'
import PostComment from './PostComment'
import { FC } from 'react'


type FormFields = {
    comment: string
}

interface PostCommentsProps {
    id: string
}

const PostComments: FC<PostCommentsProps> = ({ id }) => {

    const { data: comments } = appApi.useFetchPostCommentsQuery(id ? id : skipToken)

    const [createComment] = appApi.useCreateCommentMutation()

    const user = useAppSelector(state => state.user)

    const { register, handleSubmit } = useForm<FormFields>()

    const onSubmit: SubmitHandler<FormFields> = (data) => {
        if (!user.user?.id || !id) return
        createComment({
            post_id: id,
            comment: data.comment,
            user_id: user.user.id
        })
    }
    return (
        <div>
            <p className='uppercase text-2xl mt-10'>{comments?.length} Comments</p>
            <div className='mt-10 flex flex-col'>
                <p className='uppercase text-2xl mb-7'>Leave a comment</p>
                <div className='flex flex-col gap-5'>
                    {comments && comments.map(comment => <PostComment comment={comment} />)}
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className='mt-7'>
                    <textarea className='form-input w-full overflow-hidden' {...register('comment', {
                        required: true
                    })} placeholder='Write your comment here *' />
                    <button className='button uppercase mt-7' type="submit">
                        Post comment
                    </button>
                </form>
            </div>
        </div>
    )
}

export default PostComments