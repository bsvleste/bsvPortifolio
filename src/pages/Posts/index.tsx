import {
  ArrowSquareOut,
  CalendarBlank,
  CaretLeft,
  ChatTeardropText,
  GithubLogo,
} from 'phosphor-react'
import { Link } from 'react-router-dom'
import { Container } from '../../components/Container'
import {
  ContinerPostHeader,
  ContainerLinks,
  ContainerTitle,
  ContainerMediaSocial,
  ContainerPost,
} from './styles'

export function Post() {
  return (
    <Container>
      <ContinerPostHeader>
        <ContainerLinks>
          <Link to="/">
            <CaretLeft size={16} />
            Voltar
          </Link>

          <Link to="https://github.com/bsvcode85">
            ver no github
            <ArrowSquareOut size={16} />
          </Link>
        </ContainerLinks>
        <ContainerTitle>
          <h1>Title do Post</h1>
          <ContainerMediaSocial>
            <div>
              <GithubLogo size={24} />
              <span>BsvLeste</span>
            </div>
            <div>
              <CalendarBlank size={24} />
              <span>Há 1 dia</span>
            </div>
            <div>
              <ChatTeardropText size={24} />
              <span>Há 1 dia</span>
            </div>
          </ContainerMediaSocial>
        </ContainerTitle>
      </ContinerPostHeader>
      <ContainerPost>
        <h1>d aslçkdçlasldas dkaskdlç</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
          architecto iure, dicta dolorum beatae expedita at adipisci nisi
          distinctio molestias voluptates maiores. Labore maxime laboriosam
          nesciunt sit asperiores voluptatum inventore!
        </p>
      </ContainerPost>
    </Container>
  )
}
