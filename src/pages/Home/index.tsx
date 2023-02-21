import { Link, useNavigate } from 'react-router-dom'
import {
  ButtonBlog,
  ContainerHome,
  HomeHeader,
  HomeMenu,
  HomeSection,
} from './styles'
import { PaperPlaneTilt } from 'phosphor-react'
import logoBsvCode from '../../assets/bsvcode.png'
import fotoPerfil from '../../assets/bsvcoding.png'
export function Home() {
  const navigate = useNavigate()
  function handleNavigationBlog() {
    navigate('/blog')
  }
  return (
    <ContainerHome>
      <HomeHeader>
        <img src={logoBsvCode} alt="bsv code" />
        <HomeMenu>
          <Link to="">Blog</Link>
          <Link to="">Contato</Link>
          <Link to="">Sobre</Link>
        </HomeMenu>
      </HomeHeader>
      <HomeSection>
        <img src={fotoPerfil} alt="" />
        <div>
          <div>
            <span>Olá, eu sou o</span>
          </div>
          <strong>Bruno de Souza Valeiro, </strong>
          <div>
            <span>Programador full stack Javascript</span>
          </div>
          <ButtonBlog onClick={handleNavigationBlog}>
            Ver Blog <PaperPlaneTilt size={24} />
          </ButtonBlog>
        </div>
      </HomeSection>
    </ContainerHome>
  )
}
