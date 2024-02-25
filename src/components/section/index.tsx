import { Container, Title } from './styles'

export type Props = {
  title: string
  backgroud: 'black' | 'gray'
  children: JSX.Element
}

const Section = ({ title, backgroud, children }: Props) => (
  <Container backgroud={backgroud}>
    <div className="container">
      <Title>{title}</Title>
      {children}
    </div>
  </Container>
)

export default Section
