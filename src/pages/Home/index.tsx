import { Container } from '../../components/Container'
import { HomeHeader, HomeMenu, HomeSection } from './styles'
import logoBsvCode from '../../assets/bsvcode.png'
import fotoPerfil from '../../assets/fotoBruno.png'
import { Link } from 'react-router-dom'
export function Home() {
  return (
    <Container>
      <HomeHeader>
        <img src={logoBsvCode} alt="bsv code" />
        <HomeMenu>
          <Link to="">Blog</Link>
          <Link to="">Contato</Link>
          <Link to="">Sobre</Link>
        </HomeMenu>
      </HomeHeader>
      <HomeSection>
        <div>
          <img src={fotoPerfil} alt="" />
        </div>
        <div>
          <div>
            <span>Olá, eu sou o</span>
          </div>
          <strong>Bruno de Souza Valeiro</strong>,
          <div>
            formado em Sistema de Informação e com habilidades em Produção
            Gráfica. Além disso, estou sempre buscando aprimorar minhas
            habilidades e conhecimentos. Meu portfólio reflete minha paixão por
            tecnologia, design e criatividade. Aqui, você encontrará projetos
            que demonstrem minha experiência e habilidades em desenvolvimento
            web, design gráfico e produção de conteúdo visual.
          </div>
          <button>Ver Blog</button>
        </div>
      </HomeSection>
    </Container>
  )
}
