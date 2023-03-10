import { useCallback, useEffect, useState } from 'react'
import { Container } from '../../components/Container'
import { Spinner } from '../../components/Spinner'
import { api } from '../../lib/api'
import { relativeDateFormatter } from '../../utils/formatter'
import {
  PostCards,
  ContainerPosts,
  PostTitle,
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
    html_url: string
  }
}
export function Portfolio() {
  const [post, setPost] = useState<PostProps[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const postLenght = post.length || 0
  const getPosts = useCallback(async (query: string = '') => {
    try {
      setIsLoading(true)
      const response = await api.get(
        `search/issues?q=label:published%20repo:bsvleste/bsvportifolio`,
      )
      setPost(response.data.items)
    } finally {
      setIsLoading(false)
    }
  }, [])
  useEffect(() => {
    getPosts()
  }, [])
  return (
    <Container>
      <WrapperPublications>
        <p>Publicações</p>
        <span>{postLenght} Publicações</span>
      </WrapperPublications>
      {/* <SearchFormContainer>
        <input type="text" placeholder="Busque pelo post" />
        <button>Enviar</button>
      </SearchFormContainer> */}
      <ContainerPosts>
        {isLoading ? (
          <Spinner />
        ) : (
          post.map((infoUser, index) => (
            <PostCards to={`/portfolio/post/${infoUser.number}`} key={index}>
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
