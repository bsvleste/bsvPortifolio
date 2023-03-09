import { useCallback, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowSquareOut, CaretLeft } from 'phosphor-react'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { Container } from '../../components/Container'
import { api } from '../../lib/api'
import {
  ContinerPostHeader,
  ContainerLinks,
  ContainerTitle,
  ContainerPost,
} from './styles'
import { Spinner } from '../../components/Spinner'
import { PostProps } from '../Portfolio'

export function Post() {
  const [postData, setPostData] = useState<PostProps>({} as PostProps)
  const [isLoading, setIsLoading] = useState(true)

  const { id } = useParams()

  const getPostDetails = useCallback(async () => {
    try {
      setIsLoading(true)

      const response = await api.get(
        `/repos/bsvleste/bsvportifolio/issues/${id}`,
      )
      console.log(response.data)
      setPostData(response.data)
    } finally {
      setIsLoading(false)
    }
  }, [id, postData])

  useEffect(() => {
    getPostDetails()
  }, [])

  return (
    <Container>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <ContinerPostHeader>
            <ContainerLinks>
              <Link to="/portfolio">
                <CaretLeft size={16} />
                Voltar
              </Link>

              <Link to={postData?.user?.html_url} target="_blank">
                ver no github
                <ArrowSquareOut size={16} />
              </Link>
            </ContainerLinks>
            <ContainerTitle>
              <h1>{postData.title}</h1>
            </ContainerTitle>
          </ContinerPostHeader>
          <ContainerPost>
            <ReactMarkdown
              // eslint-disable-next-line react/no-children-prop
              children={postData.body}
              components={{
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || '')
                  return !inline && match ? (
                    <SyntaxHighlighter
                      // eslint-disable-next-line react/no-children-prop
                      children={String(children).replace(/\n$/, '')}
                      style={dracula as any}
                      language={match[1]}
                      PreTag="div"
                      {...props}
                    />
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  )
                },
              }}
            />
          </ContainerPost>
        </>
      )}
    </Container>
  )
}
