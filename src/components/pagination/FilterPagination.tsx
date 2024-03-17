import { FC } from "react"


interface FilterPaginationProps {
    blocks: JSX.Element[]
}

const FilterPagination: FC<FilterPaginationProps> = ({ blocks }) => {
    return (
        <div className="flex flex-col gap-10">
            <div>
                <input className="py-4 px-5 border-2 border-[#EEEEEE] text-[#3A3A3A] focus:border-[#72AEC8] focus-visible:outline-none" type="text" placeholder="Search" />
            </div>
            {blocks.map(block => block)}
        </div>
    )
}

export default FilterPagination