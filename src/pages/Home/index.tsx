import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import Banner from '../../components/Banner'

const promocoes: Game[] = [
  {
    id: 1,
    system: 'windows',
    category: 'Ação',
    description: 'teste',
    title: 'Resident Evil 4',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 2,
    system: 'windows',
    category: 'Ação',
    description: 'teste',
    title: 'Resident Evil 4',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 3,
    system: 'windows',
    category: 'Ação',
    description: 'teste',
    title: 'Resident Evil 4',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 4,
    system: 'windows',
    category: 'Ação',
    description: 'teste',
    title: 'Resident Evil 4',
    infos: ['10%', 'R$ 250,00'],
    image: resident
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
    image: diablo
  },
  {
    id: 6,
    category: 'Ação',
    system: 'windows',
    description: 'teste',
    title: 'Resident Evil 4',
    infos: ['10%', 'R$ 250,00'],
    image: diablo
  },
  {
    id: 7,
    category: 'Ação',
    system: 'windows',
    description: 'teste',
    title: 'Resident Evil 4',
    infos: ['10%', 'R$ 250,00'],
    image: diablo
  },
  {
    id: 8,
    category: 'Ação',
    system: 'windows',
    description: 'teste',
    title: 'Resident Evil 4',
    infos: ['10%', 'R$ 250,00'],
    image: diablo
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductsList title="Promoções" backgroud="gray" games={promocoes} />
    <ProductsList title="Em breve" backgroud="black" games={emBreve} />
  </>
)

export default Home
