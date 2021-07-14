import { GetServerSidePropsContext, NextPage } from 'next'
import Header from '@components/Header'
import ProductView from '@client/views/product'
import { IProduct } from '@client/store/modules/cart/types'
import { formatPrice } from '@client/utils/format'
import { getProducts } from '@services/product'

type HomePageProps = {
  products: IProduct[]
}

const makeProps = (products: IProduct[]) => ({ props: { products } })

const HomePage: NextPage<HomePageProps> = ({ products }) => {
  return (
    <>
      <Header />
      <ProductView products={products} />
    </>
  )
}

//getServerSideProps to fecth initially all products from server side before appear a client side
export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    // Request all products
    const res = await getProducts()

    //Format the product price to be understandble
    const data = res.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price)
    }))

    return makeProps(data)
  } catch {
    return makeProps([])
  }
}

export default HomePage
