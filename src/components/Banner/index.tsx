import { Imagem, Precos, Titulo } from './styles'
import Tag from '../Tag'
import Loader from '../Loader'
import Button from '../Button'
import { useGetFeatureGameQuery } from '../../services/api'
import { parseToBrl } from '../../ultils'

const Banner = () => {
  const { data: game } = useGetFeatureGameQuery()

  if (!game) {
    return <Loader />
  }

  return (
    <Imagem style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Titulo>{game?.name}</Titulo>
          <Precos>
            De <span>{parseToBrl(game.prices.old)}</span>
            <br />
            por apenas {parseToBrl(game.prices.current)}
          </Precos>
        </div>
        <Button
          type="link"
          to={`/product/${game.id}`}
          title="clique aqui para aproveitar"
        >
          Aproveitar
        </Button>
      </div>
    </Imagem>
  )
}

export default Banner
