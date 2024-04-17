import Features from '../components/Features'
import TestimonialsSlider from '../components/TestimonialsSlider'
import { Link } from 'react-router-dom'
import { ROUTES_PATHS } from '../router/types'

const About = () => {
    return (
        <div className='container-lg'>
            <Features />
            <div className='flex items-center gap-11'>
                <iframe width="460" height="400" src="https://www.youtube.com/embed/ZEGpWo7ethQ?si=P531bz4bbiM_88qT&amp;controls=0&amp;start=4909" ></iframe>
                <div className='max-w-[400px]'>
                    <h1 className='uppercase text-2xl mb-2 font-jost'>How was Ministore Found?</h1>
                    <p className='font-lato font-light mb-9'>
                        Risus augue curabitur diam senectus congue velit et. Sed vitae metus nibh sit era. Nulla adipiscing pharetra pellentesque maecenas odio eros at. Et libero vulputate amet duis erat volutpat vitae eget. Sed vitae metus nibh sit era. Nulla adipiscing pharetra pellentesque maecenas odio eros at. Quam libero etiam et in ac at quis.
                        Sed vitae metus nibh sit era. Nulla adipiscing pharetra pellentesque maecenas odio eros at. Et libero vulputate amet duis erat volutpat vitae eget. Quam libero etiam et in ac at quis. Risus augue curabitur diam senectus congue velit et.
                    </p>
                    <Link className='button bg-black-1 flex items-center w-fit' to={ROUTES_PATHS.SHOP}>
                        Shop Our store
                    </Link>
                </div>
            </div>
            <TestimonialsSlider limit={5} />
        </div>
    )
}

export default About