import { GithubLogo, InstagramLogo, LinkedinLogo } from 'phosphor-react'
import { Link } from 'react-router-dom'
import logo from '../../../../assets/fotoBrunoPerfil.jpg'
import {
  ContainerHeader,
  ContainerInfo,
  ContainerPerfil,
  FotoPerfil,
  WrapperSocialMedia,
} from './styles'
export function CardPerfil() {
  return (
    <ContainerPerfil>
      <FotoPerfil>
        <img src={logo} alt="" />
      </FotoPerfil>
      <ContainerInfo>
        <ContainerHeader>
          <h1>Bruno de Souza Valeiro</h1>
        </ContainerHeader>
        <p>
          Programador com conhecimentos em Javascript, Html, Css, Typescript,
          Nodejs, Express, React, React Native, NextJS, Figma, Banco de Dados,
          UI Design, Identidade Visual. Formado em Sistema de Informação e
          Produção Gráfica Digital.
        </p>
        <WrapperSocialMedia>
          <Link to="">
            <GithubLogo size={18} weight="fill" />
          </Link>
          <Link to="">
            <InstagramLogo size={18} weight="fill" />
          </Link>
          <Link to="">
            <LinkedinLogo size={18} weight="fill" />
          </Link>
        </WrapperSocialMedia>
      </ContainerInfo>
    </ContainerPerfil>
  )
}
