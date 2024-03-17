import { EventHandler, useState } from "react"
import Pagination, { cardType } from "../components/pagination/Pagination"
import ProductCard from "../components/product/ProductCard"
import { IProduct } from "../models/apiModels"
import { productApi } from "../services/ProductService"
import { sortItem } from "../models/types"
import FilterPagination from "../components/pagination/FilterPagination"
import FilterList from "../components/pagination/filtersBlocks/FilterList"

const productCard = (props: cardType): JSX.Element => {
  props = props as IProduct
  return <ProductCard product={props} />
}

const Shop = () => {
  const [page, setPage] = useState<number>(1)
  const [category, setCategory] = useState<string>('')
  const [brand, setBrand] = useState<string>('')
  const [sortItem, setSortItem] = useState<string>('Default sorting')
  const [sortBy, setSortBy] = useState<string>('')
  const [filter, setFilter] = useState<string>('all')

  const { data: paginate } = productApi.useFetchByPaginateQuery({ category: category, brand: brand, page: page, per_page: 9, sort: sortBy })
  const { data: categories } = productApi.useFetchProductCategorisQuery('')
  const { data: brands } = productApi.useFetchProductBrandsQuery('')

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
      } else {
        setCategory(e.currentTarget.textContent)
      }
    }
  }

  const brandsHandle = (e: React.MouseEvent<HTMLLIElement>) => {
    if (e.currentTarget.textContent) setBrand(e.currentTarget.textContent)
  }

  const filterBlocks: JSX.Element[] = [
    <FilterList filter={filter} filterHandle={filterHandle} title={'Categories'} items={categories} itemHandle={categoriesHandle} />,
    <FilterList filter={filter} filterHandle={filterHandle} title={'Brands'} items={brands} itemHandle={brandsHandle} />,
  ]


  return (
    <main className="container mx-auto max-w-screen-lg py-28">
      <div className="flex gap-10">
        <Pagination data={paginate} cardElement={productCard} sortItems={sortItems} sortItem={sortItem} page={page} pageHandle={pageHandle} />
        <FilterPagination blocks={filterBlocks} />
      </div>

    </main>
  )
}

export default Shop