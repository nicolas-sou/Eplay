import {
  useGetActionGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportGamesQuery,
  useGetfightGamesQuery
} from '../../services/api'
import ProductsList from '../../components/ProductsList'

const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: fightGames } = useGetfightGamesQuery()
  const { data: rpgGames } = useGetRpgGamesQuery()
  const { data: simulationGames } = useGetSimulationGamesQuery()
  const { data: sportGames } = useGetSportGamesQuery()

  if (actionGames && fightGames && rpgGames && simulationGames && sportGames) {
    return (
      <>
        <ProductsList
          title="Ação"
          backgroud="black"
          games={actionGames}
          id="action"
        />
        <ProductsList
          title="Esportes"
          backgroud="gray"
          games={sportGames}
          id="sports"
        />
        <ProductsList
          title="Luta"
          backgroud="black"
          games={fightGames}
          id="fight"
        />
        <ProductsList title="RPG" backgroud="gray" games={rpgGames} id="rpg" />
        <ProductsList
          title="Simulação"
          backgroud="black"
          games={simulationGames}
          id="simulation"
        />
      </>
    )
  }
  return <h4>Carregando ...</h4>
}

export default Categories
