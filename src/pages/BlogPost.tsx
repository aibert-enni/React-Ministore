import { useParams } from 'react-router-dom'
import { appApi } from '../services/ApiService'
import { skipToken } from '@reduxjs/toolkit/query'
import { useAppSelector } from '../hooks/redux'
import { SubmitHandler, useForm } from 'react-hook-form'
import PostComment from '../components/PostComment'

type FormFields = {
    comment: string
}

const BlogPost = () => {
    const { id } = useParams()

    const user = useAppSelector(state => state.user)

    const { data: postData } = appApi.useFetchPostQuery(id ? id : skipToken)
    const post = postData && postData[0]

    const { data: comments } = appApi.useFetchPostCommentsQuery(id ? id : skipToken)

    const [createComment] = appApi.useCreateCommentMutation()

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
        <div className='container-lg my-28 flex flex-col gap-7'>
            <p className='text-[#848484] text-sm uppercase'> {post?.date} - {post?.categories.join(" ")}</p>
            <p className='uppercase text-3xl'>{post?.title}</p>
            <img className='h-[500px]' src={post?.coverLink} alt="" />
            <div dangerouslySetInnerHTML={{ __html: post?.content ? post.content : '' }} />
            <div className='flex gap-5'>
                {post?.categories.map(category => <p className='capitalize hover:text-blue cursor-pointer'>{category}</p>)}
            </div>
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
        </div>
    )
}

export default BlogPost