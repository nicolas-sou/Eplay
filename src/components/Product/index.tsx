import Tag from '../Tag'
import { Card, Descricao, Infos, Titulo } from './styles'

type Props = {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
}

const Product = ({
  title,
  category,
  system,
  description,
  infos,
  image
}: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info} size={'small'}>
          {info}
        </Tag>
      ))}
    </Infos>
    <Titulo>{title}</Titulo>
    <Tag size={'small'}>{category}</Tag>
    <Tag size={'small'}>{system}</Tag>
    <Descricao>{description}</Descricao>
  </Card>
)
export default Product
