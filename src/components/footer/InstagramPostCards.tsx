import { FC } from 'react'
import { InstaPost } from '../../models/apiProductModels'

import instagramIcon from "../../assets/instagramIcon.svg"

interface InstagramPostCardsProps {
    posts?: InstaPost[]
}

const InstagramPostCards: FC<InstagramPostCardsProps> = ({ posts }) => {
    return (
        <div className="flex flex-col items-center mt-28">
            <p className="uppercase text-3xl">Shop our insta</p>
            <div className="flex gap-5 mt-7">
                {posts?.map(post =>
                    <div onClick={() => location.href = post.post_link} className="group cursor-pointer flex-shrink-0 hover:bg-[#000] relative group">
                        <img className="w-[188px] h-[188px] hover:opacity-80" src={post.img_url} alt="" />
                        <img className="-translate-x-2/4 translate-y-2/4 left-2/4 absolute bottom-2/4 opacity-0 group-hover:opacity-100 pointer-events-none" src={instagramIcon} alt="" />
                    </div>
                )}
            </div>
        </div>
    )
}

export default InstagramPostCards