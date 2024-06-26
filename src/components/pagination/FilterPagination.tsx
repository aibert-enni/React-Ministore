import React, { FC } from "react"


interface FilterPaginationProps {
    blocks: JSX.Element[],
    searchHandle: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const FilterPagination: FC<FilterPaginationProps> = ({ blocks, searchHandle }) => {
    return (
        <div className="flex flex-col gap-10">
            <div>
                <input onChange={(e) => searchHandle(e)} className="py-4 px-5 font-lato border-2 border-[#EEEEEE] text-black-2 focus:border-[#72AEC8] focus-visible:outline-none" type="text" placeholder="Search" />
            </div>
            {blocks.map(block => block)}
        </div>
    )
}

export default FilterPagination