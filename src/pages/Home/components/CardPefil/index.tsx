import { ArrowSquareOut, GithubLogo, Users } from 'phosphor-react'
import { Link } from 'react-router-dom'
import logo from '../../../../assets/LogoBruno.png'
import {
  ContainerHeader,
  ContainerInfo,
  ContainerPerfil,
  FotoPerfil,
  WrapperLink,
} from './styles'
export function CardPerfil() {
  return (
    <ContainerPerfil>
      <FotoPerfil>
        <img src={logo} alt="" />
      </FotoPerfil>

      <ContainerInfo>
        <ContainerHeader>
          <h1>Bruno de souza Valeiro</h1>
          <WrapperLink>
            <Link to="https://github.com/bsvleste" target="_blank">
              GITHUB
              <ArrowSquareOut size={16} />
            </Link>
          </WrapperLink>
        </ContainerHeader>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <div>
          <span>
            <GithubLogo />
            bsvleste
          </span>
          <span>
            <Users />3 seguidores
          </span>
        </div>
      </ContainerInfo>
    </ContainerPerfil>
  )
}
