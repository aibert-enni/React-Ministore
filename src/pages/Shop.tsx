import { EventHandler, useState } from "react"
import Pagination, { cardType } from "../components/Pagination"
import ProductCard from "../components/product/ProductCard"
import { IProduct } from "../models/apiModels"
import { productApi } from "../services/ProductService"
import { sortItem } from "../models/types"

const productCard = (props: cardType): JSX.Element => {
  props = props as IProduct
  return <ProductCard product={props} />
}

const Shop = () => {
  const [page, setPage] = useState<number>(1)
  const [category, setCategory] = useState<string>('')
  const [sortItem, setSortItem] = useState<string>('Default sorting')
  const [sortBy, setSortBy] = useState<string>('')

  const { data: paginate } = productApi.useFetchByPaginateQuery({ category: category, page: page, per_page: 9, sort: sortBy })

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
        setSortBy('-price')
      }
    },
    {
      title: 'Price: High to Low',
      onClick: () => {
        setSortItem('Price: High to Low')
        setSortBy('price')
      }
    }
  ]

  const pageHandle = (page: string | null | number) => {
    setPage(Number(page))
  }

  console.log(paginate)



  return (
    <main className="container mx-auto max-w-screen-lg">
      <div className="flex">
        <Pagination data={paginate} cardElement={productCard} sortItems={sortItems} sortItem={sortItem} page={page} pageHandle={pageHandle} />
      </div>
    </main>
  )
}

export default Shop