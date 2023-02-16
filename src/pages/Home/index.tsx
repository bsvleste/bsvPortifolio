import { useEffect, useState } from 'react'
import { Container } from '../../components/Container'
import { api } from '../../lib/api'
import { CardPerfil } from './components/CardPefil'
import ReactMarkdown from 'react-markdown'
import {
  PostCards,
  ContainerPosts,
  PostTitle,
  SearchFormContainer,
  WrapperPublications,
} from './styles'

export function Home() {
  const [userInfo, setUserInfo] = useState([])
  async function getGitHubInfo() {
    const response = await api.get('')
    setUserInfo(response.data)
    console.log(userInfo)
  }
  useEffect(() => {
    getGitHubInfo()
  }, [])
  return (
    <Container>
      <CardPerfil />
      <WrapperPublications>
        <p>Publicações</p>
        <span>6 Publicações</span>
      </WrapperPublications>
      <SearchFormContainer>
        <input type="text" placeholder="Busque pelo post" />
        <button>Enviar</button>
      </SearchFormContainer>
      <ContainerPosts>
        {userInfo &&
          userInfo.map((infoUser) => (
            <>
              <PostCards to="/Post" key={userInfo.id}>
                <PostTitle>
                  <h1>{infoUser.title}</h1>
                  <span>Há 1 dia</span>
                </PostTitle>
                <ReactMarkdown>{infoUser.body}</ReactMarkdown>
              </PostCards>
            </>
          ))}
      </ContainerPosts>
    </Container>
  )
}
