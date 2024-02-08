import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'

import starwars from '../../assets/images/star_wars.png'
import zelda from '../../assets/images/zelda.png'

const promocoes: Game[] = [
  {
    id: 1,
    system: 'windows',
    category: 'Ação',
    description: 'teste',
    title: 'Resident Evil 4',
    infos: ['10%', 'R$ 250,00'],
    image: zelda
  },
  {
    id: 2,
    system: 'windows',
    category: 'Ação',
    description: 'teste',
    title: 'Resident Evil 4',
    infos: ['10%', 'R$ 250,00'],
    image: zelda
  },
  {
    id: 3,
    system: 'windows',
    category: 'Ação',
    description: 'teste',
    title: 'Resident Evil 4',
    infos: ['10%', 'R$ 250,00'],
    image: zelda
  },
  {
    id: 4,
    system: 'windows',
    category: 'Ação',
    description: 'teste',
    title: 'Resident Evil 4',
    infos: ['10%', 'R$ 250,00'],
    image: zelda
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'Ação',
    system: 'windows',
    description: 'teste',
    title: 'Resident Evil 4',
    infos: ['10%', 'R$ 250,00'],
    image: starwars
  },
  {
    id: 6,
    category: 'Ação',
    system: 'windows',
    description: 'teste',
    title: 'Resident Evil 4',
    infos: ['10%', 'R$ 250,00'],
    image: starwars
  },
  {
    id: 7,
    category: 'Ação',
    system: 'windows',
    description: 'teste',
    title: 'Resident Evil 4',
    infos: ['10%', 'R$ 250,00'],
    image: starwars
  },
  {
    id: 8,
    category: 'Ação',
    system: 'windows',
    description: 'teste',
    title: 'Resident Evil 4',
    infos: ['10%', 'R$ 250,00'],
    image: starwars
  }
]

const Categories = () => (
  <>
    <ProductsList title="RPG" backgroud="gray" games={promocoes} />
    <ProductsList title="Ação" backgroud="black" games={emBreve} />
    <ProductsList title="Aventura" backgroud="gray" games={promocoes} />
    <ProductsList title="FPS" backgroud="black" games={emBreve} />
  </>
)

export default Categories
