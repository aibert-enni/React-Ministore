import { FC } from 'react'

interface BreadcrumbsProps {
    currentPath: string
}

const Breadcrumbs: FC<BreadcrumbsProps> = ({ currentPath }) => {

    return (
        <div className='Breadcrumbs bg-[#EDF1F3]' >
            <div className='container mx-auto max-w-screen-lg py-16 flex flex-col items-center'>
                <p className='uppercase font-light text-6xl'>
                    {currentPath}
                </p>
                <p className='font-light mt-3'>
                    Home {'>'} <span className='capitalize text-[#72AEC8] underline underline-offset-2 decoration-[0.5px]'>{currentPath}</span>
                </p>
            </div>
        </div >
    )
}

export default Breadcrumbs