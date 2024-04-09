import { FC, useEffect, useRef, useState } from 'react'
import { Paginate, Product } from '../../models/apiProductModels'
import { sortItem } from '../../models/types'

import sortArrow from '../../assets/sortArrow.svg'
import { PostCard } from '../../models/apiBlogModels'

export type cardType = Product | PostCard

interface PaginationProps {
    data?: Paginate
    cardElement: (props: cardType) => JSX.Element,
    sortItem: string,
    sortItems: sortItem[],
    page: number,
    pageHandle: (page: string | null | number) => void
}

const Pagination: FC<PaginationProps> = ({ data, cardElement, sortItem, sortItems, page, pageHandle }) => {
    const [show, setShow] = useState<boolean>(false)

    const cardsRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        cardsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, [page])

    const pageList = () => {
        const list: JSX.Element[] = []
        const pagesNumber = data?.last

        if (pagesNumber) {
            if (pagesNumber >= 1) {
                const firstPagination = page == 1 ? 1 : page - 1
                list.push(
                    <li className={page === 1 ? 'text-[#72AEC8]' : 'cursor-pointer'} onClick={(e) => {
                        if (page !== 1) pageHandle(e.currentTarget.textContent)
                    }}>
                        {firstPagination}
                    </li>
                )
            }
            if (pagesNumber >= 2) {
                const secondPagination = page === 1 ? 2 : data.next !== null ? data.prev : page
                list.push(
                    <li className={secondPagination === page ? 'text-[#72AEC8]' : 'cursor-pointer'} onClick={(e) => {
                        if (secondPagination !== page) pageHandle(e.currentTarget.textContent)
                    }}>
                        {secondPagination}
                    </li>
                )
            }
            if (pagesNumber >= 3) {
                const thirdPagination = page === pagesNumber ? page : page + 1
                list.push(
                    <li className={page === pagesNumber ? 'text-[#72AEC8]' : 'cursor-pointer'} onClick={(e) => {
                        if (thirdPagination !== page) pageHandle(e.currentTarget.textContent)
                    }}>
                        {thirdPagination}
                    </li>
                )
            }
        }
        return list
    }

    const prevArrow = () => {
        const isPrev = data?.prev != null
        return <svg onClick={() => {
            if (isPrev) pageHandle(page - 1)
        }} className={isPrev ? 'cursor-pointer' : ''} width="27" height="49" viewBox="0 0 27 49" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.5 47L3.18 24.32L25.5 2" stroke={isPrev ? ' #72AEC8' : '#D7DDDF'} stroke-width="4" />
        </svg>
    }

    const nextArrow = () => {
        const isNext = data?.next != null
        return <svg onClick={() => {
            if (isNext) pageHandle(page + 1)
        }} className={`rotate-180 ${isNext ? 'cursor-pointer' : ''}`} width="27" height="49" viewBox="0 0 27 49" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.5 47L3.18 24.32L25.5 2" stroke={isNext ? ' #72AEC8' : '#D7DDDF'} stroke-width="4" />
        </svg>
    }

    return (
        <div className=''>
            <div className='flex justify-between items-center font-light mb-5'>
                <p>Showing {1 + ((page - 1) * 9)}-{data?.next != null ? page * 9 : data?.items} of {data?.items} results</p>
                <div className='flex flex-col flex-shrink-0 relative'>
                    <div onClick={() => setShow(!show)} className='flex items-center gap-1 cursor-pointer'>
                        <p>{sortItem}</p>
                        <img src={sortArrow} alt="" />
                    </div>
                    <div className={`absolute top-6 w-[140px] z-10 bg-white border rounded-md border-[#CDCDCD] px-3 ${!show && 'hidden'}`}>
                        {sortItems.map(item =>
                            <p className='cursor-pointer hover:text-[#72AEC8] py-1' onClick={() => { item.onClick(); setShow(!show) }}>{item.title}</p>
                        )}
                    </div>
                </div>
            </div>
            <div>
                <div ref={cardsRef} className='grid grid-cols-3 gap-x-5 gap-y-8 mb-16'>
                    {data?.data?.map(props =>
                        cardElement(props)
                    )}
                </div>
                <div className='flex justify-center items-center gap-6'>
                    {prevArrow()}
                    <ul className='flex gap-6 text-[#D7DDDF]'>
                        {pageList().map(element => element)}
                    </ul>
                    {nextArrow()}
                </div>
            </div>
        </div>
    )
}

export default Pagination