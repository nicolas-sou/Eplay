import ProductsList from '../../components/ProductsList'

import {
  useGetActionGamesQuery,
  useGetRPGGamesQuery,
  useGetSportsGamesQuery,
  useGetSimulationGamesQuery,
  useGetFightGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: acao, isLoading: isLoadingAction } = useGetActionGamesQuery()
  const { data: rpg, isLoading: isLoadingRpg } = useGetRPGGamesQuery()
  const { data: esportes, isLoading: isLoadingSports } =
    useGetSportsGamesQuery()
  const { data: simulacao, isLoading: isLoadingSimulation } =
    useGetSimulationGamesQuery()
  const { data: luta, isLoading: isLoadingFight } = useGetFightGamesQuery()

  return (
    <>
      <ProductsList
        games={acao}
        title="Ação"
        background="black"
        id="action"
        isLoading={isLoadingAction}
      />
      <ProductsList
        games={esportes}
        title="Esportes"
        background="gray"
        id="sports"
        isLoading={isLoadingSports}
      />
      <ProductsList
        games={simulacao}
        title="Simulacao"
        background="black"
        id="simulation"
        isLoading={isLoadingSimulation}
      />
      <ProductsList
        games={luta}
        title="Luta"
        background="gray"
        id="fight"
        isLoading={isLoadingFight}
      />
      <ProductsList
        games={rpg}
        title="Rpg"
        background="black"
        id="rpg"
        isLoading={isLoadingRpg}
      />
    </>
  )
}

export default Categories
