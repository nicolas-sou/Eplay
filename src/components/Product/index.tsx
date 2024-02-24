import Tag from '../Tag'
import { Card, Descricao, Infos, Titulo } from './styles'

type Props = {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
  id: number
}

const Product = ({
  title,
  category,
  system,
  description,
  infos,
  image,
  id
}: Props) => {
  const getDescription = (description: string) => {
    if (description.length > 95) {
      return description.slice(0, 92) + '...'
    }

    return description
  }

  return (
    <Card to={`/product/${id}`}>
      <img src={image} alt={title} />
      <Infos>
        {infos.map((info) => (
          <Tag size={'small'} key={info}>
            {info}
          </Tag>
        ))}
      </Infos>
      <Titulo>{title}</Titulo>
      <Tag size={'small'}>{category}</Tag>
      <Tag size={'small'}>{system}</Tag>
      <Descricao>{getDescription(description)}</Descricao>
    </Card>
  )
}

export default Product
