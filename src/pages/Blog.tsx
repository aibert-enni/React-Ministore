import { useState } from "react"
import { appApi } from "../services/ApiService"
import FilterList from "../components/pagination/filtersBlocks/FilterList"
import FilterPagination from "../components/pagination/FilterPagination"
import Pagination, { cardType } from "../components/pagination/Pagination"
import { sortItem } from "../models/types"
import PostCard from "../components/post/PostCard"
import { Post } from "../models/apiBlogModels"

const postCard = (props: cardType): JSX.Element => {
    props = props as Post
    return <PostCard postCard={props} />
}

const Blog = () => {
    const [page, setPage] = useState<number>(1)
    const [category, setCategory] = useState<string>('')
    const [sortItem, setSortItem] = useState<string>('Latest')
    const [orderBy, setOrderBy] = useState<string>('')
    const [filter, setFilter] = useState<string>('all')
    const [search, setSearch] = useState<string>('')

    const { data: paginate } = appApi.useFetchPostByPaginateQuery({ category: category, page: page, per_page: 9, order: orderBy, search: search })
    const { data: categories } = appApi.useFetchPostCategoriesQuery('')

    const sortItems: sortItem[] = [
        {
            title: 'Latest',
            onClick: () => {
                setSortItem('Latest')
                setOrderBy('asc')
            }
        },
        {
            title: 'Newest',
            onClick: () => {
                setSortItem('Newest')
                setOrderBy('desc')
            }
        }
    ]

    const pageHandle = (page: string | null | number) => {
        setPage(Number(page))
    }

    const filterHandle = (e: React.MouseEvent<HTMLLIElement>) => {
        if (e.currentTarget.textContent) setFilter(e.currentTarget.textContent)
    }

    const categoriesHandle = (e: React.MouseEvent<HTMLLIElement>) => {
        if (e.currentTarget.textContent) {
            if (e.currentTarget.textContent === 'all') {
                setCategory('')
                setPage(1)
            } else {
                setCategory(e.currentTarget.textContent)
                setPage(1)
            }
        }
    }

    const searchHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value)
        if (e.currentTarget.value || e.currentTarget.value === '') setSearch(e.currentTarget.value)
    }

    const filterBlocks: JSX.Element[] = [
        <FilterList filter={filter} filterHandle={filterHandle} title={'Categories'} items={categories} itemHandle={categoriesHandle} />
    ]

    return (
        <div className="container-lg my-28">
            <div className="flex gap-10">
                <FilterPagination blocks={filterBlocks} searchHandle={searchHandle} />
                <Pagination data={paginate} cardElement={postCard} sortItems={sortItems} sortItem={sortItem} page={page} pageHandle={pageHandle} />
            </div>
        </div>
    )
}

export default Blog