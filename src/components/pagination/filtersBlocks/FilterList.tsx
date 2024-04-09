import React, { FC } from 'react'
import { Filter } from '../../../models/apiProductModels'

interface FilterListProps {
    title: string,
    filter: string,
    filterHandle: (e: React.MouseEvent<HTMLLIElement>) => void,
    items?: Filter[],
    itemHandle: (e: React.MouseEvent<HTMLLIElement>) => void
}

const FilterList: FC<FilterListProps> = ({ title, filter, filterHandle, items, itemHandle }) => {
    return (
        <div>
            <p className='uppercase text-lg underline underline-offset-2 mb-3'>{title}</p>
            <ul className='text-black-2 flex flex-col gap-2'>
                {title.toLocaleLowerCase() === 'categories' && <li className={`capitalize ${filter === 'all' ? 'text-[#72AEC8]' : 'cursor-pointer hover:text-[#72AEC8]'}`} onClick={(e) => {
                    if (filter !== 'all') {
                        itemHandle(e)
                        filterHandle(e)
                    }
                }}>all</li>}
                {items?.map(item =>
                    <li className={`capitalize ${filter === item.name ? 'text-[#72AEC8]' : 'cursor-pointer hover:text-[#72AEC8]'}`} onClick={(e) => {
                        if (filter !== item.name) {
                            itemHandle(e)
                            filterHandle(e)
                        }
                    }}>{item.name}</li>
                )}
            </ul>
        </div>
    )
}

export default FilterList