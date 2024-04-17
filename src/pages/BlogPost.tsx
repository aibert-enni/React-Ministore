import { useParams } from 'react-router-dom'
import { appApi } from '../services/ApiService'
import { skipToken } from '@reduxjs/toolkit/query'
import PostComments from '../components/post/PostComments'



const BlogPost = () => {
    const { id } = useParams()

    const { data: postData } = appApi.useFetchPostQuery(id ? id : skipToken)
    const post = postData && postData[0]

    return (
        <div className='container-lg my-28 flex flex-col gap-7'>
            <p className='text-[#848484] text-sm uppercase font-lato'> {post?.date} - {post?.categories.join(" ")}</p>
            <p className='uppercase font-jost text-3xl'>{post?.title}</p>
            <img className='h-[500px]' src={post?.coverLink} alt="" />
            <div className='font-lato' dangerouslySetInnerHTML={{ __html: post?.content ? post.content : '' }} />
            <div className='flex gap-5 font-lato'>
                {post?.categories.map(category => <p className='capitalize hover:text-blue cursor-pointer'>{category}</p>)}
            </div>
            {id && <PostComments id={id} />}
        </div>
    )
}

export default BlogPost