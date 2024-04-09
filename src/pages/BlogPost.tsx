import { useParams } from 'react-router-dom'
import { Post } from '../models/apiBlogModels'

const BlogPost = () => {
    const { id } = useParams()



    return (
        <div>BlogPost</div>
    )
}

export default BlogPost