import { Link, useNavigate } from 'react-router-dom'
import {
  ButtonBlog,
  ContainerHome,
  ContainerSection,
  HomeHeader,
  HomeMenu,
  HomeSection,
  SectionInfo,
} from './styles'
import { PaperPlaneTilt } from 'phosphor-react'
import logoBsvCode from '../../assets/bsvcode.png'
import fotoPerfil from '../../assets/bsvcoding.png'
export function Home() {
  const navigate = useNavigate()
  function handleNavigationBlog() {
    navigate('/portfolio')
  }
  return (
    <ContainerHome>
      <HomeHeader>
        <img src={logoBsvCode} alt="bsv code" />
        <HomeMenu>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/sobre">Sobre</Link>
        </HomeMenu>
      </HomeHeader>
      <ContainerSection>
        <HomeSection>
          <img src={fotoPerfil} alt="" />
          <SectionInfo>
            <div>
              <span>Olá, eu sou o</span>
            </div>
            <strong>Bruno de Souza Valeiro, </strong>
            <div>
              <span>Programador full stack Javascript</span>
            </div>
            <ButtonBlog onClick={handleNavigationBlog}>
              Portfolio <PaperPlaneTilt size={24} />
            </ButtonBlog>
          </SectionInfo>
        </HomeSection>
      </ContainerSection>
    </ContainerHome>
  )
}
