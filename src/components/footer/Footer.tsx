import { productApi } from "../../services/ProductService"

import SubscribeEmail from "./SubscribeEmail"
import InstagramPostCards from "./InstagramPostCards"
import FooterLinks from "./FooterLinks"
import Copyright from "./Copyright"

const Footer = () => {
    const { data: instaPosts } = productApi.useFetchIntsaPostsQuery('')

    return (
        <div className="footer">
            <div className='container mx-auto max-w-screen-lg mt-32'>
                <SubscribeEmail />
                <InstagramPostCards posts={instaPosts} />
            </div>
            <footer className="mt-24">
                <FooterLinks />
                <Copyright />
            </footer>
        </div>
    )
}

export default Footer