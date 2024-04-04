import { useState } from "react"
import Pagination, { cardType } from "../components/pagination/Pagination"
import ProductCard from "../components/product/ProductCard"
import { Product } from "../models/apiProductModels"
import { appApi } from "../services/ApiService"
import { sortItem } from "../models/types"
import FilterPagination from "../components/pagination/FilterPagination"
import FilterList from "../components/pagination/filtersBlocks/FilterList"

const productCard = (props: cardType): JSX.Element => {
  props = props as Product
  return <ProductCard product={props} />
}

const Shop = () => {
  const [page, setPage] = useState<number>(1)
  const [category, setCategory] = useState<string>('')
  const [brand, setBrand] = useState<string>('')
  const [sortItem, setSortItem] = useState<string>('Default sorting')
  const [sortBy, setSortBy] = useState<string>('')
  const [filter, setFilter] = useState<string>('all')
  const [search, setSearch] = useState<string>('')

  const { data: paginate } = appApi.useFetchByPaginateQuery({ category: category, brand: brand, page: page, per_page: 9, sort: sortBy, search: search })
  const { data: categories } = appApi.useFetchProductCategoriesQuery('')
  const { data: brands } = appApi.useFetchProductBrandsQuery('')

  const sortItems: sortItem[] = [
    {
      title: 'Default sorting',
      onClick: () => {
        setSortItem('Default sorting')
        setSortBy('')
      }
    },
    {
      title: 'Price: Low to High',
      onClick: () => {
        setSortItem('Price: Low to High')
        setSortBy('price')
      }
    },
    {
      title: 'Price: High to Low',
      onClick: () => {
        setSortItem('Price: High to Low')
        setSortBy('-price')
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
        setBrand('')
        setPage(1)
      } else {
        setCategory(e.currentTarget.textContent)
        setPage(1)
      }
    }
  }

  const brandsHandle = (e: React.MouseEvent<HTMLLIElement>) => {
    if (e.currentTarget.textContent) setBrand(e.currentTarget.textContent)
  }

  const searchHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value)
    if (e.currentTarget.value || e.currentTarget.value === '') setSearch(e.currentTarget.value)
  }

  const filterBlocks: JSX.Element[] = [
    <FilterList filter={filter} filterHandle={filterHandle} title={'Categories'} items={categories} itemHandle={categoriesHandle} />,
    <FilterList filter={filter} filterHandle={filterHandle} title={'Brands'} items={brands} itemHandle={brandsHandle} />,
  ]


  return (
    <main className="container-lg py-28">
      <div className="flex gap-10">
        <Pagination data={paginate} cardElement={productCard} sortItems={sortItems} sortItem={sortItem} page={page} pageHandle={pageHandle} />
        <FilterPagination blocks={filterBlocks} searchHandle={searchHandle} />
      </div>

    </main>
  )
}

export default Shop