import { useParams } from 'react-router-dom'
import Gallery from '../../components/Gallery'
import Hero from '../../components/Hero'
import Section from '../../components/Section.js'
import { useGetGameQuery } from '../../services/api'
import Loader from '../../components/Loader'

type GameParams = {
  id: string
}

const Product = () => {
  const { id } = useParams() as GameParams
  const { data: game } = useGetGameQuery(id)

  if (!game) {
    return <Loader />
  }
  return (
    <>
      <Hero game={game} />
      <Section title="Sobre o jogo" backgroud="black">
        <p>{game.description}</p>
      </Section>
      <Section title="Mais detalhes" backgroud="gray">
        <p>
          <b>Plataforma: </b> {game.details.system} <br />
          <b>Desenvolvedor:</b> {game.details.developer}
          <br />
          <b>Editora:</b> {game.details.publisher} <br />
          <b>Idiomas:</b> O jogo oferece suporte a diversos idiomas, incluindo{' '}
          {game.details.languages.join(', ')}
        </p>
      </Section>
      <Gallery
        defaultCover={game.media.cover}
        name={game.name}
        items={game.media.gallery}
      />
    </>
  )
}

export default Product
