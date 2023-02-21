import {
  EnvelopeSimple,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
} from 'phosphor-react'
import { Link } from 'react-router-dom'
import { ContainerFooter, WrapperFooter, WrapperSocialMedia } from './styles'

export function Footer() {
  return (
    <ContainerFooter>
      <WrapperFooter>
        <WrapperSocialMedia>
          <Link to="https://github.com/bsvleste" target="_blank">
            <GithubLogo size={32} weight="fill" />
          </Link>
          <Link to="https://www.instagram.com/bsvcode/" target="_blank">
            <InstagramLogo size={32} weight="fill" />
          </Link>
          <Link
            to="https://www.linkedin.com/in/bruno-souza-valeiro/"
            target="_blank"
          >
            <LinkedinLogo size={32} weight="fill" />
          </Link>
          <div>
            <EnvelopeSimple size={32} weight="fill" />
            bvaleiro@gmail.com
          </div>
        </WrapperSocialMedia>
      </WrapperFooter>
    </ContainerFooter>
  )
}
