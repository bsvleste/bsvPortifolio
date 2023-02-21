import { useCallback, useEffect, useState } from 'react'
import { Container } from '../../components/Container'
import { Spinner } from '../../components/Spinner'
import { api } from '../../lib/api'
import { relativeDateFormatter } from '../../utils/formatter'
import { CardPerfil } from './components/CardPefil'
import {
  PostCards,
  ContainerPosts,
  PostTitle,
  SearchFormContainer,
  WrapperPublications,
} from './styles'
export interface PostProps {
  title: string
  body: string
  created_at: string
  number: number
  html_url: string
  comments: number
  user: {
    login: string
  }
}
export function Blog() {
  const [post, setPost] = useState<PostProps[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const getPosts = useCallback(async (query: string = '') => {
    try {
      setIsLoading(true)
      const response = await api.get('/repos/bsvleste/bsvportifolio/issues')

      setPost(response.data)
    } finally {
      setIsLoading(false)
    }
  }, [])
  useEffect(() => {
    getPosts()
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
        {isLoading ? (
          <Spinner />
        ) : (
          post.map((infoUser, index) => (
            <PostCards to={`/blog/post/${infoUser.number}`} key={index}>
              <PostTitle>
                <h1>{infoUser.title}</h1>
                <span>{relativeDateFormatter(infoUser.created_at)}</span>
              </PostTitle>
              <p>{infoUser.body}</p>
            </PostCards>
          ))
        )}
      </ContainerPosts>
    </Container>
  )
}
