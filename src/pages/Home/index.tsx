import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'
import ProductsList from '../../components/ProductsList'
import Banner from '../../components/Banner'

const Home = () => {
  const { data: onSaleGames, isLoading: isloadingSale } = useGetOnSaleQuery()
  const { data: soonGames, isLoading: isLoadingSoon } = useGetSoonQuery()

  return (
    <>
      <Banner />
      <ProductsList
        title="Promoções"
        background="gray"
        games={onSaleGames}
        id="on-sale"
        isLoading={isloadingSale}
      />
      <ProductsList
        title="Em breve"
        background="black"
        games={soonGames}
        id="coming-soon"
        isLoading={isLoadingSoon}
      />
    </>
  )
}

export default Home
